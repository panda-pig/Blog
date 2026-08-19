---
slug: macos-chatgpt-codex-flickering-fix
lang: en
title: "ChatGPT Codex Keeps Flickering and Won’t Respond on macOS: What Finally Fixed It"
description: "The Codex page in the ChatGPT desktop app kept flickering and became unusable, while reinstalling and restarting did nothing. Here is how I fixed it by backing up ~/.codex and refreshing the Codex login without losing local projects and tasks."
date: 2026-07-28
tags: ["ChatGPT", "Codex", "macOS", "Troubleshooting"]
draft: true
---

I recently ran into a frustrating issue with the new ChatGPT desktop app on my Mac. As soon as I selected Codex in the sidebar, the entire page started flickering as if it were constantly reloading. None of the buttons could be clicked.

My symptoms were:

- Chat and the other pages opened normally
- The flickering began as soon as I entered the Codex home page
- The page became unusable before I opened any specific project
- Reinstalling ChatGPT did not help
- Restarting the Mac did not help
- Disabling GPU rendering did not help
- Moving the local configuration stopped the flickering, but many of my projects and task records disappeared

After several rounds of troubleshooting, my working theory was that **the local Codex data was still intact, but the authentication state had become invalid or inconsistent. The client kept loading, failing authentication, and refreshing, creating an endless flicker loop.**

This is not an official diagnosis. It is an inference based on the behavior I observed. Still, following that lead let me restore Codex without removing my existing local data.

## 1. Back Up Your Local Codex Data First

Before changing anything, back up the local `~/.codex` directory.

It may contain:

- Local project records
- Conversation history
- Task information
- Codex configuration
- Project paths and indexes

**Do not begin by deleting the whole directory.**

First, quit ChatGPT completely:

```bash
osascript -e 'quit app "ChatGPT"'
```

Then run:

```bash
tar --no-xattrs \
  --exclude='.codex/ipc' \
  -czf ~/Desktop/codex_backup.tar.gz \
  -C ~ .codex
```

This creates the following archive on your Desktop:

```text
codex_backup.tar.gz
```

The command excludes `.codex/ipc` because that directory may contain runtime socket files such as `ipc.sock`. These temporary communication files may not archive correctly, and they are not part of your project or task data.

After the backup finishes, verify that the archive can be read:

```bash
tar -tzf ~/Desktop/codex_backup.tar.gz >/dev/null && echo "Backup OK"
```

If Terminal prints:

```text
Backup OK
```

the archive is readable. Confirm this before moving on.

## 2. Do Not Delete the Entire `~/.codex` Directory

During troubleshooting, I temporarily moved the entire `.codex` directory:

```bash
mv ~/.codex ~/.codex_backup
```

When ChatGPT started again, it automatically created a new, empty `.codex` directory. The result was:

- The Codex page stopped flickering
- Many of my previous projects, tasks, and conversation records no longer appeared

When I restored the old directory:

- The projects and tasks came back
- The flickering came back as well

This showed that the problem was related to some state in the old directory. However, deleting the entire directory was not a good solution because it also affected local records.

That changed the direction of my troubleshooting: **keep the project and task data in `.codex`, but refresh the login state.**

> If you use the “move the directory” method for diagnosis, quit ChatGPT first and make sure a path named `~/.codex_backup` does not already exist. I do not recommend trying this before creating the compressed backup.

## 3. Check Whether the Codex CLI Is Installed

Run:

```bash
which codex
```

If it returns a path such as:

```text
/opt/homebrew/bin/codex
```

or:

```text
/Users/your-name/.nvm/versions/node/.../bin/codex
```

the Codex CLI is installed.

You can also check its version:

```bash
codex --version
```

Then check the current login state:

```bash
codex login status
```

If it prints:

```text
Logged in using ChatGPT
```

the CLI is currently signed in through a ChatGPT account. Even if it claims that you are logged in, signing out and back in can still be worth trying when the authentication state appears inconsistent.

## 4. Log Out of Codex and Sign In Again

This was the step that ultimately worked for me.

First, run:

```bash
codex logout
```

Then sign in again:

```bash
codex login
```

Terminal will guide you to a browser where you can sign in to your ChatGPT account. After completing the sign-in flow, verify the status again:

```bash
codex login status
```

If it displays:

```text
Logged in using ChatGPT
```

the new login has succeeded.

Now reopen ChatGPT:

```bash
open -a "ChatGPT"
```

Then return to Codex. In my case, everything worked again while the original `.codex` data remained in place:

- My existing projects and tasks were still there
- The Codex page no longer flickered
- All buttons were clickable again
- Switching accounts also worked normally

## 5. Things I Tried That Did Not Work

Before finding the effective fix, I tested several other common approaches.

### Reinstalling ChatGPT

This did not work for me.

Reinstalling usually replaces the application itself without removing `~/.codex` from the user directory. The newly installed app may therefore continue reading the old configuration, state, and authentication data.

### Restarting the Mac

This did not work either.

If the issue comes from persistent local state or authentication data, restarting the operating system does not change those files.

### Disabling the GPU

I tried:

```bash
open -a "ChatGPT" --args --disable-gpu
```

The page continued to flicker. In my case, the problem was not simply related to hardware acceleration or graphics rendering.

### Renaming Only `config.toml`

I also temporarily renamed the configuration file:

```bash
mv ~/.codex/config.toml ~/.codex/config.toml.bak
```

This can help rule out a damaged configuration file, but it did not fully resolve my issue. The flickering was not caused by `config.toml` alone.

### Deleting the Entire `.codex` Directory

Starting with a fresh `.codex` directory did make the page usable, but many local projects and task records temporarily disappeared.

Unless you have a verified backup, I do not recommend doing this. Even with a backup, refreshing the login is a smaller and safer first step.

## 6. The Short Version of the Fix

The complete process can be reduced to five steps.

### Step 1: Quit ChatGPT

```bash
osascript -e 'quit app "ChatGPT"'
```

### Step 2: Back Up Local Codex Data

```bash
tar --no-xattrs \
  --exclude='.codex/ipc' \
  -czf ~/Desktop/codex_backup.tar.gz \
  -C ~ .codex
```

### Step 3: Verify the Backup

```bash
tar -tzf ~/Desktop/codex_backup.tar.gz >/dev/null && echo "Backup OK"
```

Continue only after you see `Backup OK`.

### Step 4: Sign In to Codex Again

```bash
codex logout
codex login
```

### Step 5: Reopen ChatGPT

```bash
open -a "ChatGPT"
```

## 7. Conclusion

The key was not reinstalling the application or deleting all local data. The more appropriate approach for my case was:

1. Create a complete backup of `~/.codex`
2. Keep the existing project and task data
3. Log out of Codex and sign in again
4. Let the client refresh its invalid or inconsistent authentication state

The commands that actually fixed the issue were:

```bash
codex logout
codex login
```

while keeping the original:

```text
~/.codex
```

If you are seeing the same combination of symptoms—a constantly flickering Codex page, an unclickable interface, no improvement after reinstalling or disabling the GPU, and a fresh `.codex` directory that works only at the cost of missing projects—this is the method I would try first.

Back up your local `.codex` data before making any changes so that your projects and task records remain recoverable.

---
title: "From Windows to NixOS"
description:
    "Exploring my journey from Windows to NixOS, including my experiences with
    Ubuntu, Arch Linux, and the advantages of a declarative system
    configuration."
pubDate: "09 March 2025"
tags: ["Linux", "NixOS", "Nix"]
---

## Getting Started with Linux

I initially started using Linux in 2019 by dual booting it with Windows on my
laptop. My laptop at the time was only ever used for programming which meant I
never ended up booting into Windows.

## Ubuntu

This was my first Linux distribution of choice for a few different reasons.
Previously, I had used Ubuntu on a server for web hosting, game servers, etc so
I had some familiarity with it. Many people at the time suggested Ubuntu as a
good starting point for a Linux beginner so this is what I chose.

Ubuntu had many positives for me including reliability, stability and
customisability. It was very rare for me to encounter any issues at all and was
generally a pretty good Linux distro for me at the time. It was a great
introduction into Linux but it always felt like there was something missing.

## Arch Linux

While using Ubuntu, I had heard many positive things about Arch Linux and how it
was considered to be a "difficult" / "challenging" distro. Many people had
commented on it rolling releases, and the AUR (Arch User Repository) which
included a large selection of software.

In 2020, I made the move over to Arch Linux. I completely wiped my laptop, only
installing Arch on it and dual booted my main PC with Arch and Windows. At this
point, I primarily used Arch Linux and only booted into Windows for certain
games. While the installation of Arch isn't as difficult as people had made it
out to be, it was a very informative and educational process.

When I first installed Arch, I started off by using KDE Plasma which is a full
desktop environment. While I liked KDE it always felt like there was so much
stuff that I rarely / never used. This then had lead me to discovering i3 and
tiling window managers in general, which ended up vastly improving my workflow
and development productivity. Arch Linux + i3 felt perfect for me as it gave me
full control over the entire system and how everything worked.

While Arch Linux did work very well for me, there were a few _rare_ occasions
where an update may stop my system from booting or just outright stop software
from working correctly. These were uncommon but were still incredibly annoying
when they did happen and I started to care much less about being on the bleeding
edge and more about system stability.

## NixOS

In 2024, I made the move over to NixOS. When compared to Arch, NixOS was
significantly more complicated and has a much higher learning curve. Even
installing packages is a slightly more involved process than arch:

### Installation on Arch

```bash
sudo pacman -S firefox
```

### Installation on NixOS

```bash
vim "<nixos_config_directory>"
```

```nix
{
	environment.systemPackages = with pkgs; [
		firefox # Add firefox to the system packages list
	];
}
```

```bash
sudo nixos-rebuild switch --flake "<config_path>"@"<hostname>"
git commit -am "Added Firefox"
git push
```

It isn't a massively complex process but, this general flow applies to every
aspect of the system. If you want to make a change, open the config, make the
change, rebuild the system. Every. Single. Time.

This all does have one massive positive. The entire system is configured through
a file which is version controlled. Anytime the system will need to be
reinstalled, installed onto a new device, etc it's a much quicker process. All
that is required is cloning the repo and rebuilding with the flake. Then, all
your programs, themes, and preferences will be set up and ready to go.

It's also not only the system configuration that can be controlled through Nix,
so can the users home folder. There is a tool called Home Manager that
integrates with NixOS and allows user configurations (such as dotfiles) to be
managed declaratively with Nix.

I have my NixOS configuration in a Github repo that can be found at
[member87/nixos](https://github.com/member87/nixos).

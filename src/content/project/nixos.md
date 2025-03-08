---
title: "NixOS"
description: "All Nix configuration files for my computers running NixOS."
tech: ["Nix"]
url: "nixos"
loadFactor: 10
---

## NixOS

I started using NixOS in September 2024. Before that, I had been using Arch
Linux since 2021.

There were several key reasons why I decided to switch from Arch Linux to NixOS,
but the main one was its **declarative configuration and reproducibility**. With
NixOS, I can define my entire system setup in a configuration file (using a
flake), making it effortless to replicate or restore my environment across
multiple machines.

Additionally, using **Home Manager**, I can manage my dotfiles in a declarative
and reproducible way. This means my user environment, including installed
programs, shell settings, and even theme customizations, is version-controlled
and easily portable.

While installing programs in NixOS can be a bit more complex compared to Arch
Linux's AUR, the **benefits far outweigh the cons**. The ability to have
multiple systems with an identical configuration, roll back changes safely, and
maintain a highly structured setup makes NixOS a powerful choice for long-term
stability and maintainability.

Switching to NixOS has been a game-changer in how I manage my systems.

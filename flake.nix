{
  description = "Example JavaScript development environment for Zero to Nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    nixpkgs-unstable.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
    nixpkgs-unstable
  }: let
    allSystems = [
      "x86_64-linux" # 64-bit Intel/AMD Linux
      "aarch64-linux" # 64-bit ARM Linux
      "x86_64-darwin" # 64-bit Intel macOS
      "aarch64-darwin" # 64-bit ARM macOS
    ];

    forAllSystems = f:
      nixpkgs.lib.genAttrs allSystems (system:
        f {
          pkgs = import nixpkgs {inherit system;};
          unstablePkgs = import nixpkgs-unstable {inherit system;};
        });
  in {
    devShells = forAllSystems ({pkgs, unstablePkgs}: {
      default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_20
          uv
          unstablePkgs.bun
        ];
      };
    });
  };
}

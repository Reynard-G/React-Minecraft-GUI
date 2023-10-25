import { Meta, StoryObj } from "@storybook/react";
import CraftingTable from "@components/CraftingTable";

const meta: Meta<typeof CraftingTable> = {
  title: "Components/CraftingTable",
  component: CraftingTable
};

export default meta;
type Story = StoryObj<typeof CraftingTable>;

export const Default: Story = {
  args: {
    recipe: {
      A1: {
        name: "&6Condensed Fermento",
        lore: [
          "&6&lLEGENDARY"
        ],
        icon: "./Condensed_Fermento.webp",
        amount: 1
      },
      A2: {
        name: "&9Enchanted Red Mushroom Block",
        lore: [
          "&9&lRARE"
        ],
        icon: "./Red_Mushroom_Block.webp",
        enchanted: true,
        amount: 32
      },
      A3: {
        name: "&9Mutant Nether Wart",
        lore: [
          "&9&lRARE"
        ],
        icon: "./Mutant_Nether_Wart.webp",
        amount: 15
      },
      B1: {
        name: "&5Squash Chestplate",
        lore: [
          "&7Health: &a+180",
          "&7Defense: &a+35",
          "&7Speed: &a+5",
          "&7Farming Fortune: &a+30",
          "",
          "&8Tiered Bonus: Mento Fermento (0/4)",
          "&7&7Farming Sugar Cane, Cactus,",
          "&7Mushroom, and Nether Warts has a",
          "&7&a0.005% &7chance of dropping a",
          "&7a Fermento. &7Grants &60☘",
          "&6Farming Fortune&7.",
          "",
          "&7&8This item can be reforged!",
          "&7&4❣ &cRequires &aFarming Skill 35&c.",
          "&5&lEPIC CHESTPLATE"
        ],
        icon: "./Squash_Chestplate.webp",
        amount: 1
      },
      B2: {
        name: "&9Enchanted Sugar Cane",
        lore: [
          "&8Brewing Ingredient",
          "&9&lRARE"
        ],
        icon: "./Sugar_Cane.webp",
        enchanted: true,
        amount: 32
      },
      B3: {
        name: "&9Enchanted Cactus",
        lore: [
          "&8Brewing Ingredient",
          "&9&lRARE"
        ],
        icon: "./Cactus.webp",
        enchanted: true,
        amount: 25
      },
      C1: {
        name: "&6Condensed Fermento",
        lore: [
          "&6&lLEGENDARY"
        ],
        icon: "./Condensed_Fermento.webp",
        amount: 1
      },
      C2: {
        name: "&9Enchanted Brown Mushroom Block",
        lore: [
          "&9&lRARE"
        ],
        icon: "./Brown_Mushroom_Block.webp",
        enchanted: true,
        amount: 32
      },
      C3: {
        name: "&9Mutant Nether Wart",
        lore: [
          "&9&lRARE"
        ],
        icon: "./Mutant_Nether_Wart.webp",
        amount: 15
      },
      output: {
        name: "&6Fermento Chestplate",
        lore: [
          "&7Health: &a+195",
          "&7Defense: &a+40",
          "&7Speed: &a+6",
          "&7Farming Fortune: &a+35",
          "",
          "&8Tiered Bonus: Feast (0/4)",
          "&7Combines the Tiered Bonuses of",
          "&7wearing &a0 pieces &7of the",
          "&7Melon Armor, Cropie Armor, and",
          "&7Squash Armor. &7Grants &60☘",
          "&6Farming Fortune&7.",
          "",
          "&7&8This item can be reforged!",
          "&7&4❣ &cRequires &aFarming Skill 40&c.",
          "&6&lLEGENDARY CHESTPLATE"
        ],
        icon: "./Fermento_Chestplate.webp",
        amount: 1
      },
    },
  },
};

export const NoRecipe: Story = {
  args: {
    recipe: {
      output: {
        name: "&9Caducous Feeder",
        lore: [
          "&7Use on a pet to consume an",
          "&7&6Ultimate Carrot Candy &7and",
          "&7grant it &a1,100,000 &7pet exp.",
          "",
          "&7Has &e2 charges&7, reloading",
          "&7after &a20h&7.",
          "",
          "&5&kX&r&5 Rift-Transferable &kX",
          "&9&lRARE"
        ],
        icon: "./Bowl.webp",
        enchanted: true,
        amount: 1
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    recipe: {},
  },
};
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Gui from "@components/Gui";
import Slot from "@components/Slot";

const meta: Meta<typeof Gui> = {
  title: "Components/Gui",
  component: Gui
};

export default meta;
type Story = StoryObj<typeof Gui>;

export const Default: Story = {
  args: {}
};

export const WithSlots: Story = {
  render: () => (
    <Gui>
      <Slot item={{
        name: "&6Condensed Fermento",
        lore: [
          "&6&lLEGENDARY"
        ],
        icon: "./Condensed_Fermento.webp",
        amount: 1
      }} />
    </Gui>
  )
};

export const withRowOfSlots: Story = {
  render: () => (
    <Gui>
      <tr>
        <Slot item={{
          name: "&6Booster Cookie &8(FREE)",
          lore: [
            "&7Consume to gain the &dCookie Buff",
            "&d&7for &b4 &7days:",
            "",
            "&8‣ &7Ability to gain &bBits&7!",
            "&8‣ &3+25☯ &7on all &3Wisdom &7stats",
            "&8‣ &b+15✯ &7Magic Find",
            "&8‣ &7Keep &6coins &7on death",
            "&8‣ &ePermafly &7on private islands and gardens",
            "&8‣ &7Access &6/ah &7and &6/bazaar &7anywhere",
            "&8‣ &7Sell items directly to the trades and cookie menu",
            "&8‣ &7AFK &aimmunity &7on your island and garden",
            "&8‣ &7Toggle specific &dpotion effects",
            "&8‣ &7Access to &6/anvil&7, &6/etable&7, and &6/hex",
            "&8‣ &7Access to &6/accessorybag&7, &b/fishingbag&7,",
            "&d/potionbag&7, and &e/quiver",
            "&8‣ &7Link your items in chat using &e/show",
            "&8‣ &7Insta-sell your Material stash to the &6Bazaar",
            "",
            "&8Cookie given for free! (Untradable!)",
            "",
            "&6&lLEGENDARY"
          ],
          icon: "./Cookie.webp",
          enchanted: true,
          amount: 1
        }} />
        <Slot item={{
          name: "&6Booster Cookie &8(Untradable)",
          lore: [
            "&7Consume to gain the &dCookie Buff",
            "&d&7for &b4 &7days:",
            "",
            "&8‣ &7Ability to gain &bBits&7!",
            "&8‣ &3+25☯ &7on all &3Wisdom &7stats",
            "&8‣ &b+15✯ &7Magic Find",
            "&8‣ &7Keep &6coins &7on death",
            "&8‣ &ePermafly &7on private islands and gardens",
            "&8‣ &7Access &6/ah &7and &6/bazaar &7anywhere",
            "&8‣ &7Sell items directly to the trades and cookie menu",
            "&8‣ &7AFK &aimmunity &7on your island and garden",
            "&8‣ &7Toggle specific &dpotion effects",
            "&8‣ &7Access to &6/anvil&7, &6/etable&7, and &6/hex",
            "&8‣ &7Access to &6/accessorybag&7, &b/fishingbag&7,",
            "&d/potionbag&7, and &e/quiver",
            "&8‣ &7Link your items in chat using &e/show",
            "&8‣ &7Insta-sell your Material stash to the &6Bazaar",
            "",
            "&8Cookie given as refund! (Untradable)",
            "",
            "&6&lLEGENDARY"
          ],
          icon: "./Cookie.webp",
          enchanted: true,
          amount: 1
        }} />
        <Slot item={{
          name: "&6Booster Cookie",
          lore: [
            "&7Consume to gain the &dCookie",
            "&dBuff &7for &b4 &7days:",
            "",
            "&8‣ &7Ability to gain &bBits&7!",
            "&8‣ &3+25☯ &7on all &3Wisdom &7stats",
            "&8‣ &b+15✯ &7Magic Find",
            "&8‣ &7Keep &6coins &7on death",
            "&8‣ &ePermafly &7on private islands and gardens",
            "&8‣ &7Access &6/ah &7and &6/bazaar &7anywhere",
            "&8‣ &7Sell items directly to the trades and cookie menu",
            "&8‣ &7AFK &aimmunity &7on your island and garden",
            "&8‣ &7Toggle specific &dpotion effects",
            "&8‣ &7Access to &6/anvil&7, &6/etable&7, and &6/hex",
            "&8‣ &7Access to &6/accessorybag&7, &b/fishingbag&7,",
            "&d/potionbag&7, and &e/quiver",
            "&8‣ &7Link your items in chat using &e/show",
            "&8‣ &7Insta-sell your Material stash to the &6Bazaar",
            "",
            "&6&lLEGENDARY"
          ],
          icon: "./Cookie.webp",
          enchanted: true,
          amount: 1
        }} />
      </tr>
    </Gui>
  )
};
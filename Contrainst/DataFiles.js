import { color } from "../components/Colors";

export const mobileData = [
  {
    id: "1",
    title: "Utility",
    subTitle: "Travel",
    icon: "mobile1",
    amount: "500.00",
    textColor: "green",
    navigate: "mobile1",
    iconColor: color.tertiary,
  },
  {
    id: "2",
    title: "Current Acount",
    subTitle: "Utility",
    icon: "wallet",
    amount: "250.79",
    textColor: "black",
    iconColor: color.secondary,
    navigate: "details",
  },
  {
    id: "3",
    title: "Add a receipt",
    subTitle: "Sales",
    icon: "profile",
    amount: "10,50.00",
    textColor: "green",
    iconColor: color.gray,
    navigate: "Invoice",
  },
];

export const userHistoryData = [
  {
    id: "1",
    title: "June total spent",
    subTitle: "Travel",
    icon: "wallet-outline",
    amount: "650.12",
    textColor: "green",
    navigate: "mobile1",
    iconColor: color.gray,
    naira: true,
  },
  {
    id: "2",
    title: "Transaction in july",
    subTitle: "Utility",
    icon: "wallet-outline",
    amount: "4",
    textColor: "black",
    iconColor: color.gray,
    navigate: "details",
    naira: false,
  },
  {
    id: "3",
    title: "Average spent",
    subTitle: "Sales",
    icon: "calculator",
    amount: "250.00",
    textColor: "green",
    iconColor: color.green,
    navigate: "Invoice",
    naira: true,

  },
];

import React from "react";

type ActionBarProps = {
  children: React.ReactNode;
  searchPlaceholder: string;
  onSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type { ActionBarProps };

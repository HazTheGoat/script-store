"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";
import { Box, styled } from "@mui/material";
import { Cart } from "../ui/cart";
import { ThemeSwitcher } from "../ui/theme-switcher";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const ApplicationHeader = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ mb: 2 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Link href="/">Script store</Link>

            <Box>
              <ThemeSwitcher />
              <Cart />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset sx={{ mb: 2 }} /> {/** This is to offset the AppBar height */}
    </>
  );
};

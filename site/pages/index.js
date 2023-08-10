import {
  Box,
  Container,
  Link,
  Input,
  Typography,
  Stack,
  Sheet,
  IconButton,
  useColorScheme
} from "@mui/joy";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import ValkyrieIcon from "@sippy-platform/valkyrie";
import * as Icons from "@sippy-platform/valkyrie";
import NextLink from "next/link";
import useSearch from "../hooks/useSearch";
import { useState } from "react";

export async function getStaticProps() {
  const files = fs.readdirSync("icons");

  const icons = files.map(fileName => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`./icons/${fileName}`, "utf-8");
    const { data } = matter(readFile);

    return {
      slug,
      name: slug.replaceAll("-", " "),
      categories: data.categories?.join(" ") ?? "",
      tags: data.tags?.join(" ") ?? "",
      viIcon: `vi${slug
        .split("-")
        .map(word => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join("")}`
    };
  });

  return {
    props: {
      icons
    }
  };
}

export default function Home({ icons }) {
  const { mode, setMode } = useColorScheme();

  const [page, setPage] = useState(0);

  const { result, needle, setNeedle } = useSearch(icons, [
    "name",
    "categories",
    "tags"
  ]);

  return (
    <Container maxWidth="xl">
      <Head>
        <title>Valkyrie</title>
        <meta name="description" content="The Valkyrie Icon set." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Stack spacing={2} sx={{ py: 2 }}>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            level="h1"
            sx={{
              display: "inline",
              backgroundImage: "linear-gradient(135deg, #0061c9, #c455f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Valkyrie
          </Typography>
          <IconButton
            variant="outlined"
            size="sm"
            onClick={() =>
              setMode(
                mode === "light" ? "dark" : mode === "dark" ? "system" : "light"
              )
            }
          >
            <ValkyrieIcon
              icon={
                mode === "light"
                  ? Icons.viSun
                  : mode === "dark"
                  ? Icons.viMoon
                  : Icons.viCircleHalfInner
              }
            />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1} alignItems="baseline">
            <Typography level="h2" sx={{ fontWeight: 700, fontSize: "xl2" }}>
              {result.length} icons
            </Typography>
            <Typography color="neutral">
              Page {page + 1} of {Math.ceil(result.length / 180)}
            </Typography>
          </Stack>

          <Input
            startDecorator={<ValkyrieIcon icon={Icons.viMagnifyingGlass} />}
            placeholder="Search"
            value={needle}
            onChange={e => {
              setNeedle(e.target.value);
              setPage(0);
            }}
          />
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(9.5rem, 100%), 1fr))",
            gap: { xs: 1 }
          }}
        >
          {result
            .slice(page * 180, (page + 1) * 180)
            .map(({ slug, viIcon }) => (
              <Sheet
                variant="outlined"
                sx={{
                  gap: 0,
                  borderRadius: "sm",
                  "&:hover, &:focus-within": {
                    backgroundColor:
                      "rgba(var(--joy-palette-primary-mainChannel) / .0625)",
                    "& > div > a > .MuiTypography-root": {
                      backgroundColor:
                        "rgba(var(--joy-palette-primary-mainChannel) / .125)"
                    }
                  }
                }}
              >
                <Stack
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ pt: 3, pb: 1 }}
                >
                  {Icons?.[viIcon] && (
                    <ValkyrieIcon icon={Icons[viIcon]} sx={{ fontSize: 32 }} />
                  )}
                  <Link
                    overlay
                    component={NextLink}
                    href={`/icons/${slug}`}
                    underline="none"
                    color="neutral"
                    sx={{
                      maxWidth: "calc(100% - 32px)"
                    }}
                  >
                    <Typography
                      noWrap
                      level="body-sm"
                      sx={{
                        px: 0.5,
                        py: 0.25,
                        borderRadius: "sm",
                        fontFamily:
                          "SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace"
                      }}
                    >
                      {viIcon}
                    </Typography>
                  </Link>
                </Stack>
              </Sheet>
            ))}
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <IconButton
            variant="solid"
            color="primary"
            onClick={() => setPage(prev => prev - 1)}
            disabled={page === 0}
          >
            <ValkyrieIcon icon={Icons.viChevronLeft} />
          </IconButton>
          <IconButton
            variant="solid"
            color="primary"
            onClick={() => setPage(prev => prev + 1)}
            disabled={page === Math.ceil(result.length / 180) - 1}
          >
            <ValkyrieIcon icon={Icons.viChevronRight} />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
}

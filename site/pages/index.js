import {
  Box,
  Button,
  Card,
  CardOverflow,
  Container,
  Divider,
  Grid,
  Link,
  Input,
  Typography
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
  const [page, setPage] = useState(0);

  const { result, needle, setNeedle } = useSearch(icons, [
    "name",
    "categories",
    "tags"
  ]);

  return (
    <Container>
      <Head>
        <title>Valkyrie</title>
        <meta name="description" content="The Valkyrie Icon set." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography
        level="h1"
        sx={{
          display: "inline",
          lineHeigth: 1.75,
          backgroundImage: "linear-gradient(135deg, #0062ff, #9238ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 700
        }}
      >
        Valkyrie
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2
        }}
      >
        <Typography level="h2" sx={{ fontWeight: 700, fontSize: "1.75rem" }}>
          Icons
        </Typography>

        <Input
          startDecorator={<ValkyrieIcon icon={Icons.viMagnifyingGlass} />}
          placeholder="Search"
          value={needle}
          onChange={e => setNeedle(e.target.value)}
        />
      </Box>
      <Grid container spacing={2}>
        {result.slice(page * 42, (page + 1) * 42).map(({ slug, viIcon }) => (
          <Grid item xs={4} sm={3} md={2} key={slug}>
            <Card variant="outlined">
              <CardOverflow>
                <Typography fontSize="xl4" textAlign="center" sx={{ my: 2 }}>
                  <NextLink href={`/icons/${slug}`} legacyBehavior>
                    <Link overlay underline="none" sx={{ color: "#222" }}>
                      {Icons?.[viIcon] && <ValkyrieIcon icon={Icons[viIcon]} />}
                    </Link>
                  </NextLink>
                </Typography>
              </CardOverflow>
              <Divider />
              <CardOverflow
                variant="soft"
                sx={{
                  py: 1,
                  textAlign: "center",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis"
                }}
              >
                <Typography
                  level="body2"
                  sx={{
                    fontFamily:
                      "SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace"
                  }}
                >
                  <NextLink href={`/icons/${slug}`} legacyBehavior>
                    <Link overlay underline="none" color="neutral">
                      {viIcon}
                    </Link>
                  </NextLink>
                </Typography>
              </CardOverflow>
            </Card>
          </Grid>
        ))}
        <Grid xs={12}>
          <Box
            sx={{
              mb: 3,
              display: "flex",
              gap: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              onClick={() => setPage(prev => prev - 1)}
              disabled={page === 0}
              startDecorator={<ValkyrieIcon icon={Icons.viChevronLeft} />}
            >
              Previous
            </Button>
            <Typography>
              {page + 1}/{Math.ceil(result.length / 42)}
            </Typography>
            <Button
              onClick={() => setPage(prev => prev + 1)}
              disabled={page === result.length - 1}
              endDecorator={<ValkyrieIcon icon={Icons.viChevronRight} />}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

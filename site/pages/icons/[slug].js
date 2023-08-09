import React from "react";
import matter from "gray-matter";
import { Container } from "@mui/system";
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  IconButton,
  Input,
  Stack,
  Typography
} from "@mui/joy";
import Head from "next/head";
import ValkyrieIcon from "@sippy-platform/valkyrie";
import * as Icons from "@sippy-platform/valkyrie";
import NextLink from "next/link";

function PostTemplate({ data, slug }) {
  const frontmatter = data;

  const icon = `vi${slug
    .split("-")
    .map(word => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join("")}`;

  return (
    <Container>
      <Head>
        <title>{frontmatter.title} &middot; Valkyrie</title>
        <meta name="description" content="The Valkyrie Icon set." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <NextLink href="/" legacyBehavior>
          <IconButton href="/">
            <ValkyrieIcon icon={Icons.viArrowLeft} />
          </IconButton>
        </NextLink>
        <Typography
          level="h1"
          fontSize="xl4"
          fontWeight="xl"
          sx={{
            backgroundImage: "linear-gradient(135deg, #0062ff, #9238ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Valkyrie
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography level="h1" fontSize="xl3" fontWeight="xl">
          {frontmatter.title}
        </Typography>
      </Box>
      {(frontmatter.categories || frontmatter.tags) && (
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center", mt: 2 }}>
          {frontmatter.categories?.map(cat => (
            <Chip key={cat}>{cat}</Chip>
          ))}
          {frontmatter.tags?.map(tag => (
            <Chip variant="soft" color="neutral" key={tag}>
              {tag}
            </Chip>
          ))}
        </Box>
      )}
      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ pt: 2 }}>
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            backgroundColor: "#fdfdfd",
            backgroundImage:
              "radial-gradient(circle, #ddd 1px, rgba(0, 0, 0, 0) 1px)",
            backgroundSize: "1rem 1rem",
            backgroundPosition: "calc(.5rem - 1px) calc(.5rem - 1px)",
            fontSize: "10rem",
            width: "20rem",
            height: "20rem"
          }}
        >
          <ValkyrieIcon icon={Icons[icon]} />
        </Card>
        <Card variant="outlined" sx={{ flexGrow: 1 }}>
          <Typography level="h3" sx={{ mb: 3 }}>
            <ValkyrieIcon icon={Icons[icon]} /> Heading icon
          </Typography>
          <Typography level="body-md" sx={{ mb: 3 }}>
            <ValkyrieIcon icon={Icons[icon]} /> Inline icon
          </Typography>
          <Box sx={{ mb: 3, display: "flex", gap: 1 }}>
            <Button startDecorator={<ValkyrieIcon icon={Icons[icon]} />}>
              Button icon
            </Button>
            <IconButton color="primary" variant="soft">
              <ValkyrieIcon icon={Icons[icon]} />
            </IconButton>
          </Box>
          <Input
            startDecorator={<ValkyrieIcon icon={Icons[icon]} />}
            placeholder={frontmatter.title}
          />
        </Card>
      </Stack>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6}>
          <Typography level="h3" sx={{ mb: 2 }}>
            HTML
          </Typography>
          <Card variant="outlined" sx={{ py: 2 }}>
            <code>{`<i class="vi vi-${slug.replaceAll(" ", "-")}"></i>`}</code>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography level="h3" sx={{ mb: 2 }}>
            React
          </Typography>
          <Card variant="outlined" sx={{ py: 2 }}>
            <code>{`<ValkyrieIcon icon={${icon}} />`}</code>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

PostTemplate.getInitialProps = async context => {
  const { slug } = context.query;

  const content = await import(`../../icons/${slug}.md`);

  const data = matter(content.default);

  return { ...data, slug };
};

export default PostTemplate;

import {
  Card,
  CardOverflow,
  Container,
  Divider,
  Grid,
  Link,
  Typography
} from "@mui/joy";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import ValkyrieIcon from "@sippy-platform/valkyrie";
import * as Icons from "@sippy-platform/valkyrie";
import NextLink from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("icons");

  const icons = files.map(fileName => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`./icons/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter
    };
  });

  return {
    props: {
      icons
    }
  };
}

export default function Home({ icons }) {
  console.log(icons);
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
      <Typography
        level="h2"
        sx={{ fontWeight: 700, mb: 2, fontSize: "1.75rem" }}
      >
        Icons
      </Typography>
      <Grid container spacing={2}>
        {icons?.map(({ slug }) => {
          const icon = `vi${slug.split("-")
            .map(word => {
              return word[0].toUpperCase() + word.substring(1);
            })
            .join("")}`;

          return (
            <Grid item xs={4} sm={3} md={2} key={slug}>
              <Card variant="outlined">
                <CardOverflow>
                  <Typography fontSize="xl4" textAlign="center" sx={{ my: 2 }}>
                    <NextLink href={`/icons/${slug}`} legacyBehavior>
                      <Link overlay underline="none" sx={{ color: '#222' }}>
                        <ValkyrieIcon icon={Icons[icon]} />
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
                        {icon}
                      </Link>
                    </NextLink>
                  </Typography>
                </CardOverflow>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

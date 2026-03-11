import { ReactNode, useMemo } from 'react';

import { Avatar, Box, List, ListItem, ListItemContent, ListItemDecorator, Sheet, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';
import Code from '@/design/components/Code';
import { ILibraryIcon } from '@/types';

import Valkyrie, { IValkyrieIcon, viArrowRight, viBook, viBug, viPen, viPlus, viTrashCan, viValkyrieSword } from '@sippy-platform/valkyrie';

import IconCard from '../../Components/IconCard';

// Constants for styling
const ICON_GRID_SX = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(9rem, 100%), 1fr))',
  gap: { xs: 1 }
};

const SIMPLE_LIST_SX = {
  '--ListItem-minHeight': '1.5rem',
  '--ListItem-paddingY': '.125rem'
};

// Types
type ChangeSectionProps = {
  title: string;
  icon: IValkyrieIcon;
  items: string[];
};

type ReleaseProps = {
  name: string;
  date: string;
  version: string;
  added?: string[];
  changed?: string[];
  fixed?: string[];
  removed?: string[];
  docs?: string[];
  newIcons?: string[];
  updatedIcons?: string[];
  renamedIcons?: { old: string; new: string }[];
  removedIcons?: string[];
};

export default function Release({
  name,
  date,
  version,
  added,
  changed,
  fixed,
  removed,
  docs,
  newIcons,
  updatedIcons,
  renamedIcons,
  removedIcons
}: ReleaseProps) {
  const newList = useMemo(() => icons.filter((icon) => newIcons?.includes(icon.slug)), [newIcons]);
  const updateList = useMemo(() => icons.filter((icon) => updatedIcons?.includes(icon.slug)), [updatedIcons]);

  return (
    <Sheet sx={{ borderRadius: 'lg', p: 3, bgcolor: 'transparent', boxShadow: 'sm' }} variant="outlined">
      <Stack gap={4}>
        <Stack direction="row" alignItems="center" gap={2}>
          <Avatar size="lg" color="primary" variant="solid">
            <Valkyrie icon={viValkyrieSword} />
          </Avatar>
          <Stack gap={0.5}>
            <Typography level="h2" lineHeight={1}>
              {name}
            </Typography>
            <Typography level="title-md" lineHeight={1}>
              {date} <Typography sx={{ color: 'neutral.600' }}>&middot; Version {version}</Typography>
            </Typography>
          </Stack>
        </Stack>
        {added && <ChangeSection title="Added" icon={viPlus} items={added} />}
        {changed && <ChangeSection title="Changed" icon={viPen} items={changed} />}
        {fixed && <ChangeSection title="Fixed" icon={viBug} items={fixed} />}
        {removed && <ChangeSection title="Removed" icon={viTrashCan} items={removed} />}
        {docs && <ChangeSection title="Documentation" icon={viBook} items={docs} />}
        {newIcons && (
          <Stack gap={2}>
            <Typography level="h3">New icons &middot; {newIcons?.length}</Typography>
            <Box sx={ICON_GRID_SX}>
              {newList.map((icon: ILibraryIcon) => (
                <IconCard key={icon.slug} icon={icon} />
              ))}
            </Box>
          </Stack>
        )}
        {updatedIcons && (
          <Stack gap={2}>
            <Typography level="h3">Updated icons &middot; {updatedIcons?.length}</Typography>
            <Box sx={ICON_GRID_SX}>
              {updateList.map((icon: ILibraryIcon) => (
                <IconCard key={icon.slug} icon={icon} />
              ))}
            </Box>
          </Stack>
        )}
        {renamedIcons && (
          <Stack gap={2}>
            <Typography level="h3">Renamed icons &middot; {renamedIcons?.length}</Typography>
            <List marker="disc" sx={SIMPLE_LIST_SX}>
              {renamedIcons.map((icon: { new: string; old: string }) => (
                <ListItem key={icon.new}>
                  <Code>{icon.old}</Code> <Valkyrie icon={viArrowRight} style={{ marginInline: 8, position: 'relative', top: 2 }} /> <Code>{icon.new}</Code>
                </ListItem>
              ))}
            </List>
          </Stack>
        )}
        {removedIcons && (
          <Stack gap={2}>
            <Typography level="h3">Removed icons &middot; {removedIcons?.length}</Typography>
            <List marker="disc" sx={SIMPLE_LIST_SX}>
              {removedIcons.map((icon: string) => (
                <ListItem key={icon}>
                  <Code>{icon}</Code>
                </ListItem>
              ))}
            </List>
          </Stack>
        )}
      </Stack>
    </Sheet>
  );
}

function ChangeSection({ title, icon, items }: ChangeSectionProps) {
  return (
    <Stack gap={2}>
      <Typography level="h3">{title}</Typography>
      <List
        sx={{
          '--ListItem-minHeight': '1.5rem',
          '--ListItem-paddingY': '.125rem',
          '--ListItemDecorator-size': '1.75rem'
        }}
      >
        {items.map((item: string, index: number) => (
          <ListItem key={index}>
            <ListItemDecorator>
              <Valkyrie icon={icon} />
            </ListItemDecorator>
            <ListItemContent>
              <Typography>{parseMarkdownCode(item)}</Typography>
            </ListItemContent>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

// Utility function to parse markdown-style backticks and convert to Code components
function parseMarkdownCode(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const regex = /`([^`]+)`/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Add Code component for the match
    parts.push(<Code key={`code-${match.index}`}>{match[1]}</Code>);
    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : parts;
}

import { Stack } from '@mui/joy';

import Code from '@/design/components/Code';

import Release from './_Release';

export default function Changelog() {
  return (
    <Stack gap={5}>
      <Release
        name="Valkyrie 1.0 beta 3"
        version="1.0.0-beta.3"
        date="19 August 2025"
        newIcons={['arrows-up-right-and-down-left-from-center', 'arrows-up-right-and-down-left-to-center', 'id-card-slash']}
        updatedIcons={['keyboard']}
      />
      <Release name="Valkyrie 1.0 beta 2" version="1.0.0-beta.2" date="11 July 2025" newIcons={['cursor', 'input', 'square-check', 'diamonds']} />
      <Release
        name="Valkyrie 1.0 beta 1"
        version="1.0.0-beta.1"
        date="26 June 2025"
        updatedIcons={[
          'arrow-down-to-line',
          'arrow-left-from-bracket',
          'arrow-up-right-from-square',
          'devices',
          'fanvil',
          'fingerprint',
          'message-pen',
          'record-stop',
          'safari',
          'signal-strong',
          'triangle-exclamation',
          'yealink'
        ]}
        added={[
          <>Valkyrie is now properly exported as both a CJS and ESM package.</>,
          <>
            The <Code>ValkyrieIcon</Code> component has been renamed to <Code>Valkyrie</Code>.
          </>,
          <>
            Adds the bounce animation to our default style, and added the <Code>bounce</Code> prop to our React component.
          </>,
          <>
            We've removed the dependency on <Code>@emotion/css</Code>!
          </>
        ]}
        fixed={[<>Fixes the SVG and export for fingerprint, record-stop, safari, signal-strong, and triangle-exclamation containing the icon twice.</>]}
      />
      <Release
        name="Valkyrie 1.0 alpha"
        version="1.0.0-alpha.57"
        date="19 May 2025"
        added={[
          <>Fully redesigned icons based on Amicons.</>,
          <>
            Adds the React <Code>ValkyrieIcon</Code> component.
          </>,
          <>Adds new animations like fade, beat and pulse to our default CSS.</>,
          <>
            Introduces a brand new documentation website with improved icon previews, component documentation with interactive playground, this changelog, and
            much more. And best of all; it's now available online instead of needing to be compiled by you.
          </>
        ]}
        changed={[
          <>Improved tooling for builds.</>,
          <>
            Renames the <Code>ValkyrieIcon</Code> type to <Code>IValkyrieIcon</Code>.
          </>,
          <>CSS transitions are now inherited from the parent element.</>
        ]}
        removed={[<>Removes the included CSS and font files.</>]}
        newIcons={[
          'align-center',
          'align-content-center',
          'align-content-end',
          'align-content-start',
          'align-justify',
          'align-left',
          'align-right',
          'angles-x',
          'apple',
          'arrow-down-arrow-up',
          'arrow-down-from-cloud',
          'arrow-left-arrow-right',
          'arrow-right-from-file',
          'arrow-right-to-bracket-clock',
          'arrow-right-to-file',
          'arrow-up-right-from-square',
          'arrow-up-to-cloud',
          'bars-uneven',
          'bel',
          'broom',
          'burger-glass',
          'calendar-clock',
          'calendar-day',
          'calendar-range-clock',
          'calendar-range',
          'calendar-week',
          'car-side',
          'chalkboard-person',
          'check',
          'circle-check',
          'circle-dashed',
          'circle-half-inner',
          'circle-half',
          'cloud-softphone',
          'command',
          'compare',
          'diagram',
          'dice-five',
          'dice-four',
          'dice-one',
          'dice-six',
          'dice-three',
          'dice-two',
          'dice',
          'door',
          'ellipsis-v',
          'export',
          'fanvil',
          'file-audio',
          'file-excel',
          'file-powerpoint',
          'file-text',
          'file-word',
          'file-zip',
          'flask',
          'folder-image',
          'folder-min',
          'folder-open',
          'folder-plus',
          'glass',
          'grip-dots-v',
          'grip-dots',
          'horizontal-line',
          'key',
          'keyboard-brightness-high',
          'keyboard-brightness-low',
          'keyboard',
          'life-ring',
          'list-bar-chart',
          'list-chekcs-xmark',
          'magnifying-glass-min',
          'magnifying-glass-plus',
          'microphone-slash',
          'min',
          'moped',
          'music-pause',
          'next',
          'order-alphabetical-asc',
          'order-alphabetical-desc',
          'order-numerical-asc',
          'order-numerical-desc',
          'pager',
          'password',
          'people-xmark',
          'person-xmark',
          'phone-xmark',
          'plate-utensils',
          'previous',
          'react',
          'receipt',
          'record-stop',
          'record',
          'rectangle-p',
          'share',
          'shopping-cart',
          'sidebar-left',
          'sidebar-right',
          'signal-fair',
          'signal-good',
          'signal-moderate',
          'signal-slash',
          'signal-strong',
          'signal-weak',
          'speaker-grill',
          'spinner',
          'subscript',
          'superscript',
          'table-cell-merge',
          'table-column-insert-left',
          'table-column-insert-right',
          'table-column-min',
          'table-header-cell',
          'table-header-column',
          'table-header-row',
          'table-min',
          'table-row-insert-bottom',
          'table-row-insert-top',
          'table-row-min',
          'tag-gear',
          'tag-plus',
          'teams',
          'toggle-off',
          'toggle-on',
          'translate',
          'wallet',
          'windows',
          'yealink'
        ]}
        renamedIcons={[
          { old: 'pin', new: 'thumbtack' },
          { old: 'pin-slash', new: 'thumbtack-slash' },
          { old: 'grip-dots', new: 'grip-dots-h' },
          { old: 'ellipsis', new: 'ellipsis-h' },
          { old: 'smartphone-arrow-right', new: 'arrow-right-from-smartphone' },
          { old: 'square-p', new: 'rectangle-p' },
          { old: 'circle-user', new: 'circle-person' },
          { old: 'arrow-right-ban', new: 'arrow-right-prohibited' },
          { old: 'ban', new: 'prohibited' },
          { old: 'clear-formatting', new: 'a-gum' },
          { old: 'clear-node', new: 'square-gum' },
          { old: 'film', new: 'filmstrip' },
          { old: 'horizontal-rule', new: 'line' },
          { old: 'link', new: 'chain' },
          { old: 'link-slash', new: 'chain-slash' },
          { old: 'list-check', new: 'list-checks' },
          { old: 'list-ol', new: 'list-ordered' },
          { old: 'list-ol-clock', new: 'list-ordered-clock' },
          { old: 'logs', new: 'files-list' },
          { old: 'paper-plane-top', new: 'paper-plane' },
          { old: 'phone-arrow-down-left-ban', new: 'phone-arrow-down-left-prohibited' },
          { old: 'phone-arrow-up-right-ban', new: 'phone-arrow-up-right-prohibited' },
          { old: 'repeat-1', new: 'repeat-once' },
          { old: 'smartphone-divert', new: 'smartphone-arrow-right' },
          { old: 'unlock', new: 'lock-open' },
          { old: 'users', new: 'people' },
          { old: 'user', new: 'person' },
          { old: 'user-clock', new: 'person-clock' },
          { old: 'user-gear', new: 'person-gear' },
          { old: 'user-headset', new: 'person-headset' },
          { old: 'user-list', new: 'person-list' },
          { old: 'user-lock', new: 'person-lock' },
          { old: 'user-plus', new: 'person-plus' },
          { old: 'volumne-none', new: 'volume-slash' }
        ]}
      />
    </Stack>
  );
}

import Code from "@/design/components/Code";
import Codeblock from "@/design/components/Codeblock";

export default function PageInstallation() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-3xl font-medium">Install Valkyrie</h2>
      <p>Get started with Valkyrie by running the following command in your project.</p>
      <Codeblock>npm install @sippy-platform/valkyrie</Codeblock>
      <h3 className="font-display text-2xl font-medium">Including the styling</h3>
      <p>Next, import the style for Valkyrie into your project's CSS file.</p>
      <Codeblock>@import '@sippy-platform/valkyrie/valkyrie.css';</Codeblock>
      <p>
        Now you can use the <Code>Valkyrie</Code> component wherever you like.
      </p>
    </div>
  );
}

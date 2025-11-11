import type { Thing, WithContext } from 'schema-dts';

type JsonLdProps<T extends Thing> = Readonly<{
  json: WithContext<T> | Array<WithContext<Thing>>;
  id?: string;
}>;

/* Safely serialize to avoid breaking out of the <script> tag */
const serialize = (data: unknown) => {
  return JSON.stringify(data)
    .replaceAll('<', '\\u003c')
    .replaceAll('\u2028', '\\u2028')
    .replaceAll('\u2029', '\\u2029');
};

export const JsonLd = <T extends Thing>({ json, id }: JsonLdProps<T>) => {
  return (
    <script
      /** biome-ignore lint/security/noDangerouslySetInnerHtml: okay here */
      dangerouslySetInnerHTML={{ __html: serialize(json) }}
      id={id}
      type='application/ld+json'
    />
  );
};

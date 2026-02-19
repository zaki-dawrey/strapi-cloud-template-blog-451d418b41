import type { Schema, Struct } from '@strapi/strapi';

export interface BlogCta extends Struct.ComponentSchema {
  collectionName: 'components_blog_ctas';
  info: {
    displayName: 'cta';
    icon: 'arrowRight';
  };
  attributes: {
    button_label: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface BlogFaq extends Struct.ComponentSchema {
  collectionName: 'components_blog_faqs';
  info: {
    displayName: 'faq';
    icon: 'question';
  };
  attributes: {
    item: Schema.Attribute.Component<'blog.items', true>;
  };
}

export interface BlogImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_image_blocks';
  info: {
    displayName: 'image-block';
    icon: 'attachment';
  };
  attributes: {
    alt_text: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlogItems extends Struct.ComponentSchema {
  collectionName: 'components_blog_items';
  info: {
    displayName: 'items';
    icon: 'archive';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface BlogRichText extends Struct.ComponentSchema {
  collectionName: 'components_blog_rich_texts';
  info: {
    displayName: 'rich-text';
    icon: 'bold';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface BlogTable extends Struct.ComponentSchema {
  collectionName: 'components_blog_tables';
  info: {
    displayName: 'table';
    icon: 'apps';
  };
  attributes: {
    columns: Schema.Attribute.JSON;
    rows: Schema.Attribute.Component<'blog.table-row', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlogTableRow extends Struct.ComponentSchema {
  collectionName: 'components_blog_table_rows';
  info: {
    displayName: 'table-row';
    icon: 'database';
  };
  attributes: {
    col_1: Schema.Attribute.String;
    col_2: Schema.Attribute.String;
    col_3: Schema.Attribute.String;
    col_4: Schema.Attribute.String;
    col_5: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.cta': BlogCta;
      'blog.faq': BlogFaq;
      'blog.image-block': BlogImageBlock;
      'blog.items': BlogItems;
      'blog.rich-text': BlogRichText;
      'blog.table': BlogTable;
      'blog.table-row': BlogTableRow;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}

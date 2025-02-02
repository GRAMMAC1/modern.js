import type { LoaderContext } from 'webpack';
import type Less from 'less';

export type LessLoaderOptions = {
  lessOptions?: Less.Options;
  additionalData?:
    | string
    | ((
        content: string,
        loaderContext: LoaderContext<LessLoaderOptions>,
      ) => string);
  sourceMap?: boolean;
  webpackImporter?: boolean;
  implementation?: boolean;
};

export type LessConfig =
  | LessLoaderOptions
  // FIXME: utils type
  | ((options: LessLoaderOptions, utils?: any) => LessLoaderOptions | void);

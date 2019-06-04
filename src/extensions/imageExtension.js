import markdownForwardedImages from 'markdown-it-forwarded-images';
import extensionSvc from '../services/extensionSvc';


extensionSvc.onInitConverter(1, (markdown) => {
  markdown.use(markdownForwardedImages, {});
});

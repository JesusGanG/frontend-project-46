import YAML from 'yaml';

const stringParserToObject = (contentString, format) => {
  const formatUpperCase = format.toUpperCase();
  if (formatUpperCase === 'JSON') {
    return JSON.parse(contentString);
  }
  if (formatUpperCase === 'YAML' || formatUpperCase === 'YML') {
    return YAML.parse(contentString);
  }
  throw new Error('unknown format type. Try YAML or JSON');
};

export default stringParserToObject;

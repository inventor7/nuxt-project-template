export const useUtils = () => {

  const { t } = useI18n();
  const translate = (word) => {
    return t(word);
  };

  return {
    translate
  }
};

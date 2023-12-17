import {renderToStaticMarkup} from 'react-dom/server';
import {az} from './az';
import { useStore } from "../../store/store.config";

const useLocalization = () => {
    const languages = useStore('locale');

    return (
      key: keyof typeof az,
      dynamicValues: Record<string, string> = {}
    ) => {
      let formattedText = languages[key] || "";
      Object.keys(dynamicValues).forEach((dynamicKey: string) => {
        const dynamicValue = dynamicValues[dynamicKey];
        if (typeof dynamicValue === "string") {
          formattedText = formattedText.replace(
            `{${dynamicKey}}`,
            dynamicValue
          );
        } else {
          const jsxString = renderToStaticMarkup(dynamicValue);
          formattedText = (
            <div
              dangerouslySetInnerHTML={{
                __html: formattedText.replace(`{${dynamicKey}}`, jsxString),
              }}
            ></div>
          );
        }
      });

      return formattedText;
    };
};

export default useLocalization;

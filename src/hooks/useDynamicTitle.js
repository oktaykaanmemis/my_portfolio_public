import { useEffect } from 'react';

function useDynamicTitle(originalTitle) {
  useEffect(() => {
    const funnyTitles = [
      "Come back! Your code misses you!",
      "Hey! Where did you go?",
      "404: Developer Not Found",
      "Don't leave me on background!",
      "⚠️ Unattended Portfolio Alert!",
      "Code waiting to be appreciated...",
      "Coffee break over? I'm still here!",
      "return toThisTab();",
      "while(userAway) { missUser(); }"
    ];

    const getRandomTitle = () => {
      const randomIndex = Math.floor(Math.random() * funnyTitles.length);
      return funnyTitles[randomIndex];
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = getRandomTitle();
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    document.title = originalTitle;

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [originalTitle]);
}

export default useDynamicTitle;

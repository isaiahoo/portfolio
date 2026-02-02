import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'skills_open_count';
const FIRED_KEY = 'skills_easter_egg_fired';
const THRESHOLD = 3;
const TEXT = '_hiring?';
const CHAR_MS = 80;

// All timings in ms from the moment the easter egg triggers
const CURSOR_ON = 800;
const TYPE_START = 1400;
const CURSOR_OFF = TYPE_START + TEXT.length * CHAR_MS; // 2040
const TAG_OFF = CURSOR_OFF + 1200; // 3240

export default function useEasterEgg(isOpen: boolean, variant: string) {
  const [showCursor, setShowCursor] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [typingText, setTypingText] = useState('');
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (variant !== 'skills' || !isOpen) return;
    if (localStorage.getItem(FIRED_KEY) === 'true') return;

    const count =
      parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10) + 1;
    localStorage.setItem(STORAGE_KEY, String(count));

    if (count < THRESHOLD) return;

    // Permanently mark as fired so it never runs again
    localStorage.setItem(FIRED_KEY, 'true');

    const ids: ReturnType<typeof setTimeout>[] = [];

    ids.push(setTimeout(() => setShowCursor(true), CURSOR_ON));
    ids.push(setTimeout(() => setShowTag(true), TYPE_START));

    for (let i = 1; i <= TEXT.length; i++) {
      ids.push(
        setTimeout(
          () => setTypingText(TEXT.slice(0, i)),
          TYPE_START + (i - 1) * CHAR_MS
        )
      );
    }

    ids.push(setTimeout(() => setShowCursor(false), CURSOR_OFF));
    ids.push(
      setTimeout(() => {
        setShowTag(false);
        setTypingText('');
      }, TAG_OFF)
    );

    timeouts.current = ids;

    return () => ids.forEach(clearTimeout);
  }, [isOpen, variant]);

  return { showCursor, showTag, typingText };
}

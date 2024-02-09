import React, {
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState
} from 'react';
import './SlideToggle.scss';

interface SlideToggleProps {
  state: boolean;
  duration: number;
  children: ReactNode
}

export const SlideToggle = memo((props: SlideToggleProps) => {
  const {
    state = false,
    duration = 0.5,
    children
  } = props;

  const [contentDefault, setContentDefault] = useState<number>(0);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = contentRef;

    if (current !== null) {
      setContentDefault(current.offsetHeight);
      setContentHeight(current.offsetHeight);
    }

    state ? setContentHeight(contentDefault) : setContentHeight(0);

  }, [contentDefault, state])

  return (
    <div className="slide-toggle" style={{
      height: contentHeight,
      transition: `all ${duration}s`
    }}>
      <div className="slide-toggle__content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
});
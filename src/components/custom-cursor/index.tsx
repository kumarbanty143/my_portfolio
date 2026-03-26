import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x - 6}px, ${y - 6}px) scale(${isLarge ? 2 : 1})`;
      }
      if (ringRef.current) {
        // Simple smoothing for ring
        ringRef.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
      }
    };

    const onMouseEnterLink = () => setIsLarge(true);
    const onMouseLeaveLink = () => setIsLarge(false);

    document.addEventListener('mousemove', onMouseMove);
    const links = document.querySelectorAll('a, button');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, [isLarge]);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div 
        className="cursor-ring" 
        ref={ringRef} 
        style={{ width: isLarge ? '60px' : '40px', height: isLarge ? '60px' : '40px' }}
      />
    </>
  );
};

export default CustomCursor;

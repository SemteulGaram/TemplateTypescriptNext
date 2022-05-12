export function copyPrevent(element: HTMLElement) {
  let onCopy = false;
  function copyHook(event: any) {
    if (onCopy) return;
    event.preventDefault();
    alert('저작권 보호를 위하여, 링크가 대신 복사됩니다.');
    const input = document.createElement('input');
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 99999);
    onCopy = true;
    document.execCommand('copy');
    onCopy = false;
    document.body.removeChild(input);
  }

  element.addEventListener('copy', copyHook);

  return () => {
    element.removeEventListener('copy', copyHook);
  };
}

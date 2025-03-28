'use client';

import React, { useCallback, useEffect, useState, JSX } from 'react';
import mermaid, { RenderResult } from 'mermaid';

export interface MermaidDiagramProps {
  children: string;
  id?: string;
  testId?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onError?: (error: unknown) => void;
}

const Mermaid = (props: MermaidDiagramProps): JSX.Element => {
  const [element, setElement] = useState<HTMLDivElement>();
  const [render_result, setRenderResult] = useState<RenderResult>();

  const container_id = `${props.id || 'd' + Date.now()}-mermaid`;
  const diagram_text = props.children;

  // initialize mermaid here, but beware that it gets called once for every instance of the component
  useEffect(() => {
    // wait for page to load before initializing mermaid
    mermaid.initialize({
      look: 'handDrawn',
      startOnLoad: true,
      securityLevel: 'loose',
      darkMode: true,
      theme: 'default',
      themeVariables: {
        commitLabelFontSize: 22,
        tagLabelFontSize: 22,
      },
      logLevel: 5,
      gitGraph: {
        rotateCommitLabel: true,
        titleTopMargin: 30,
        showCommitLabel: true,
        arrowMarkerAbsolute: false,
        mainBranchName: 'Experience',
      },
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // hook to track updates to the component ref, compatible with useEffect unlike useRef
  const updateDiagramRef = useCallback((elem: HTMLDivElement) => {
    if (!elem) return;
    setElement(elem);
  }, []);

  // hook to update the component when either the element or the rendered diagram changes
  useEffect(() => {
    if (!element) return;
    if (!render_result?.svg) return;
    element.innerHTML = render_result.svg;
    render_result.bindFunctions?.(element);
  }, [element, render_result]);

  // hook to handle the diagram rendering
  useEffect(() => {
    if (!diagram_text && diagram_text.length === 0) return;
    // create async function inside useEffect to cope with async mermaid.run
    (async () => {
      try {
        const rr = await mermaid.render(`${container_id}-svg`, diagram_text);
        setRenderResult(rr);
      } catch (e: unknown) {
        props.onError?.(e);
      }
    })();
  }, [diagram_text, container_id, props]);

  // render container (div) to hold diagram (nested SVG)
  return (
    <div
      className={props.className}
      onClick={props.onClick}
      id={container_id}
      data-testid={props.testId}
      ref={updateDiagramRef}
    />
  );
};

export default Mermaid;

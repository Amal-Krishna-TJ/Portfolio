import { ElementRef, Renderer2 } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {
  let directive: Highlight;
  let mockElementRef: ElementRef;
  let mockRenderer: Renderer2;

  beforeEach(() => {
    // Mock a dummy element
    mockElementRef = new ElementRef(document.createElement('div'));

    // Mock the Renderer2 methods you’ll use
    mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);

    // Create directive instance with mocks
    directive = new Highlight(mockElementRef, mockRenderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply styles on mouse enter', () => {
    directive.onMouseEnter();
    expect(mockRenderer.setStyle).toHaveBeenCalled();
  });

  it('should remove styles on mouse leave', () => {
    directive.onMouseLeave();
    expect(mockRenderer.removeStyle).toHaveBeenCalled();
  });
});

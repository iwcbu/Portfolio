"use client";

import type { ReactNode } from "react";
import { Component } from "react";

type Props = { children: ReactNode; onError: () => void };

export class ExperienceErrorBoundary extends Component<Props, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

import React, { useState } from "react"

export default class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static gerDerivedStateFromError(error) {
        return { hasError: true };
    }


componentDidCatch(error, info) {
    console.log(error, info);
}

render() {
    if (this.state.hasError) {
        return <div>Something went wrong.</div>
    } else {
        return this.props.children;
    }

}
}
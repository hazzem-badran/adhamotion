import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { PATHS } from "../../constants/paths";

class PageErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Page Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              عذراً، حدث خطأ في هذه الصفحة
            </h2>
            <p className="text-gray-600 mb-6">
              يبدو أن هناك مشكلة في تحميل هذه الصفحة
            </p>
            <div className="space-x-4 space-x-reverse">
              <Button stylee="btn__secondary" navigateTo={PATHS.HOME}>
                العودة للرئيسية
              </Button>
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                تحديث الصفحة
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default PageErrorBoundary;
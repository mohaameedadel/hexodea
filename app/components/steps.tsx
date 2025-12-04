import React from "react";

type Step = {
  title: string;
  description?: string;
};

type FullPageTimelineProps = {
  steps: Step[];
};

export const SimpleSteps: React.FC<FullPageTimelineProps> = ({ steps }) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-6 relative">
        <div className="absolute left-2 top-0 bottom-0 w-[1.5px] bg-[#6894DB]"></div>

        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start">
            <span className="absolute left-[3px] mt-7 w-3 h-3 bg-main ring-1 ring-white rounded-full z-10"></span>

            <div className="ml-10 w-full bg-white py-4 px-6 rounded-xl shadow-[0_0_6px_0_#0000001F]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-muted">Phase {index + 1}:</span>
                <div className="w-[calc(100%-4.5rem)] ">
                  <img
                    src="/assets/portfolioDetails/icons/line.svg"
                    className="h-px"
                    alt="line"
                  />
                </div>
              </div>
              <h3 className="text-dark font-normal text-2xl mb-6">
                {step.title}
              </h3>
              {step.description && (
                <p className="text-base text-muted font-normal">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

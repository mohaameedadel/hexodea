import React from "react";

type Step = {
  title: string;
  description?: string;
};

type FullPageTimelineProps = {
  steps: Step[];
};

export const ZigzagSteps: React.FC<FullPageTimelineProps> = ({ steps }) => {
  return (
    <div className="relative w-full py-10">
      <div className="relative flex flex-col gap-20">
        <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-[10%] bottom-[10%] w-px bg-[#6894DB]"></div>

        {steps.map((step, index) => {
          const isRight = index % 2 === 0;

          return (
            <div key={index} className="relative w-full">
              <span className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 ring-4 ring-[#6894DB] bg-main rounded-full z-10"></span>

              <div
                className={`w-full flex ${isRight ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`
                    w-full lg:max-w-[40%] bg-white p-6 rounded-xl shadow-[0_0_6px_0_#0000001F]
                    ${isRight ? "ml-10" : "ml-10 lg:mr-10"}
                  `}
                >
                  <h3 className="text-dark font-medium text-2xl">
                    <span className="text-main me-2">Step{index + 1}:</span>
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-base text-muted font-normal mt-2">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

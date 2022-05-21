import React from "react";

import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Audit Process</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>Tools</ServicesH2>
          <ServicesP>
            We use static tools like slither.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>

          <ServicesH2>Testing</ServicesH2>
          <ServicesP>
            We perform tests to identify common problems. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>

          <ServicesH2>Check your Smart Contract</ServicesH2>
          <ServicesP>
              Review the smart contract code to verify it and make sure it matches the documentation provided by the client.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>

          <ServicesH2> Final Audit</ServicesH2>
          <ServicesP>
          We send a preliminary report to the client with the main problems found. This allows us to correct any other errors before publishing the final audit report.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;

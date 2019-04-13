import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .container {
    margin: 0 2%;
    .heading {
      font-size: 1.7rem;
    }
    .sub-heading {
      font-size: 1.2rem;
    }
    .transport-method {
      font-size: 1.4rem;
      font-weight: bold;
      margin: 20px auto;
      text-align: center;
    }
  }
`;

class Dashboard extends React.Component {
  render() {
    return (
      <StyledContainer>
        <div className="container">
          <h1>Welcome to the app</h1>
          <div>
            <div className="heading">What is Carbon footprint?</div>
            <div>
              A carbon footprint is defined as: The total amount of greenhouse
              gases produced to directly and indirectly support human
              activities, usually expressed in equivalent tons of carbon dioxide
              (CO2). In other words: When you drive a car, the engine burns fuel
              which creates a certain amount of CO2, depending on its fuel
              consumption and the driving distance. (CO2 is the chemical symbol
              for carbon dioxide). When you heat your house with oil, gas or
              coal, then you also generate CO2. Even if you heat your house with
              electricity, the generation of the electrical power may also have
              emitted a certain amount of CO2. When you buy food and goods, the
              production of the food and goods also emitted some quantities of
              CO2.
            </div>
          </div>

          <div>
            <div className="heading">Direct carbon emissions </div>{" "}
            <div>
              Direct carbon emissions come from sources that are directly from
              the site that is producing a product.These emissions can also be
              referred to as scope 1 and scope 2 emissions. Scope 1 emissions
              are emissions that are directly emitted from the site of the
              process or service. An example for industry would be the emissions
              related to burning a fuel on site. On the individual level,
              emissions from personal vehicles or gas burning stoves would fall
              under scope 1. Scope 2 emissions are the other emissions related
              to purchased electricity, heat, and/or steam used on site .In the
              US, the EPA has broken down electricity emission factors by state.
            </div>
          </div>
          <div>
            <div className="heading">Indirect carbon emissions</div>
            <div>
              Indirect carbon emissions are emissions from sources upstream or
              downstream from the process being studied, also known as scope 3
              emissions. Examples of upstream, indirect carbon emissions may
              include: Transportation of materials/fuels Any energy used outside
              of the production facility Wastes produced outside of the
              production facility Examples of downstream, indirect carbon
              emissions may include: Any end-of-life process or treatments
              Product and waste transportation Emissions associated with selling
              the product
            </div>
          </div>
          <div>
            <div className="heading">
              Ways to reduce personal carbon footprint
            </div>
            <div className="sub-heading">General Way</div>
            <div>
              The most common way to reduce the carbon footprint of humans is to
              Reduce, Reuse, Recycle, Refuse. This can also be done by using
              reusable items such as thermoses for daily coffee or plastic
              containers for water and other cold beverages rather than
              disposable ones. If that option isn't available, it is best to
              properly recycle the disposable items after use. When one
              household recycles at least half of their household waste, they
              can save 1.2 tons of carbon dioxide annually. Another easy option
              is to drive less. By walking or biking to the destination rather
              than driving, not only is a person going to save money on gas, but
              they will be burning less fuel and releasing fewer emissions into
              the atmosphere. However, if walking is not an option, one can look
              into carpooling or mass transportation options in their area.
              Another option for reducing the carbon footprint of humans is to
              use less air conditioning and heating in the home. By adding
              insulation to the walls and attic of one's home, and installing
              weather stripping or caulking around doors and windows one can
              lower their heating costs more than 25 percent.
            </div>
            <div className="sub-heading">Alternatives to driving</div>
            <div>
              When possible, walk or ride your bike in order to avoid carbon
              emissions completely. Carpooling and public transportation
              drastically reduce CO2 emissions by spreading them out over many
              riders. Drive a low carbon vehicle High mileage doesn’t always
              mean low CO2 emissions. All vehicles have an estimated
              miles-per-gallon rating. Electric cars emit no CO2 if they’re
              charged with clean electricity. If you don’t charge it with your
              home’s solar panels AND live somewhere like WY, MO, MO, WV, or KY
              you’re BETTER OFF with a hybrid or high-mileage gas/diesel car.
              Here’s why. After incentives and gas savings, it essentially costs
              nothing to switch to an electric car like the the Nissan Leaf. Get
              a hitch-mounted cargo rack Don’t buy a minivan or SUV if you don’t
              need 4WD and/or will only occasionally need the extra space. A
              receiver hitch and a rack like this one only cost a few hundred
              bucks. Avoid roof-top boxes, which cost much more, increase
              aerodynamic drag, and decrease fuel economy. Driving style
              Speeding and unnecessary acceleration reduce mileage by up to 33%,
              waste gas and money, and increase your carbon footprint. Tire
              inflation and other tuning Properly inflated tires improve your
              gas mileage by up to 3%. It also helps to use the correct grade of
              motor oil, and to keep your engine tuned, because some maintenance
              fixes, like fixing faulty oxygen sensors, can increase fuel
              efficiency by up to 40%. Avoid traffic Being stuck in traffic
              wastes gas and unneccessarily creates CO2. Use traffic websites
              and apps and go a different way or wait. Misc. Combine errands to
              make fewer trips. Remove excess weight from your car. Use cruise
              control.
            </div>
          </div>

          <div className="transport-method">You are travelling via: </div>
        </div>
      </StyledContainer>
    );
  }
}

export default Dashboard;

import React from 'react'
import Heading from '../shared/Heading'
import MemberCard from './MemberCard';
import { users } from '../../utils/constants';
// import { cardData } from '../../utils/constants';

import ProgramCard from './ProgramCard';

const JoinTheMovement = () => {
  return (
    <div className="py-15 w-full flex flex-col gap-25">
      <Heading
        heading={"Join the Movement"}
        description={"Stronger, healthier lives together."}
      />
      <div className=" flex flex-col gap-5">
        <MemberCard cardData={users} />
        <MemberCard cardData={users} />
        {/* <ProgramCard cardData={cardData}/> */}
      </div>
    </div>
  );
}

export default JoinTheMovement
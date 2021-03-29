<div align="center"><img src="https://pear-pairing.s3-us-west-2.amazonaws.com/assets/pear-logo-full.png" width="35%" height="35%"></img></div>

Welcome to Pear!

Pear is intended to be a simple solution to pairing up groups of people.  The concept for Pear came about after working with a friend at Hack Reactor who has chronic wrist pain.  As part of their work they frequently need to take groups of 10-20 people and pair them up for activities.  As class sizes grew due to increased enrolment this started to take more time and was putting additional strain on their wrists.  If you're like me, then you also think this sounds like the perfect opportunity for a software engineer to swoop in with a clever solution!

Thus the concept for Pear was born.  After speaking to other members of the Hack Reactor team it became clear that Pear could fill a role there as well, helping to streamline the pair programming portion of the curriculum.  Shortly after the concept for Pear came about, there was an opportunity to participate in a 3 day hack-a-thon hosted by Hack Reactor.  Pear was pitched as a concept during the hack-a-thon and the core team was formed.

This original team consisted of three members:
- [Joel Carpenter](https://github.com/AldosAC) - Project Lead / Back End
- [Matt Belesiu](https://github.com/mbelesiu) - Pairing Algorithm / Front End
- [Chris Kim](https://github.com/cykim0225) - Front End

We worked together to identify the core functionality we wanted to implement:
- Data should be persistent for up to 4 months so it can be available for the lifetime for a Hack Reactor cohort
- Users should be able to create a roster of students to pair from
- Each set of pairs should be unique so that students have the opportunity to work with as many people as possible
- It should be easy to export pairs so that our users can quickly generate a pair and then copy and paste it for use
- Users should be able to view a history of generated pairs

We were able to take those core design concepts and build out a basic diagram for the front end which you can view [here](https://lucid.app/lucidspark/invitations/accept/9d8ea8e5-a54d-49ec-ad52-99719d0d9e62?viewport_loc=-373.2940307106773%2C-153.66468615939135%2C3744.5657732525365%2C2180.9601947885544%2C0_0)

I had recently completed Up Next utilizing AWS' Amplify framework for static hosting of the front end with a serverless back end provided by AWS Lambda.  Since time was a factor and we'd set a goal of having Pear deployed by the end of the hack-a-thon, we opted to use Amplify for Pear as well.  That gave us the ability to quickly deploy via AWS, but it also gave us a framework which was highly scalable while also ensuring that operating costs were minimal during off-peak hours.  As much as we wanted to hit our production deadline, we also wanted to ensure that the resulting app was sustainable in the long run.

[Initial design doc](https://docs.google.com/spreadsheets/d/13gncA6l3SJgeOBmAXLhQzHph2DpUcC4ZGX5KpRow6Dk/edit#gid=0)

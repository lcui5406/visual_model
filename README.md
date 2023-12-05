# The final project for IDEA9103

## Here is the modal that we set for this project:
### Each circle in the screen represents a person. Each person has four status:
1. Healthy: represented by color white.
2. Becoming Infected: represented by color yellow.
3. Infected: represented by color red.
4. Dead: represented by color black.

### Healthy status
For healthy status person, if he/she come to the virus area or being close to the becoming infected person/infected person, he/she may be infected. If he/she is just recoved from infected, he/she will have a 30 days period from being infected.

The changing probabilities is shown as below:

P(becoming infected) = min((20% + (infectedTimes * 20%)), 55%)

P(infected) = max((80% - (infectedTimes * 40%)), 10%)

P(stay healthy) = min((infectedTimes * 20%), 35%)


### Becoming Infected status
In this status, people may stay from 1 to 14 days. And at the end of this status. It may change to healthy or completely infected.

The changing probabilities is shown as below:

P(infected) = max((90% - (infectedTimes * 20%)), 10%)

P(healthy) = min((10% + (infectedTimes * 20%)), 90%)

### Infected status
In this status, people would stay for 7 days. At the end of this status. It would change to healthy or dead.

The changing probabilities is shown as below:

P(dead) = max((80% - (infectedTimes * 50%)), 5%)

P(healthy) = min((20% + (infectedTimes * 50%)), 95%)


### Dead
This is the end of a person. There would not be any more actions.


### The Vaccination
A Vaccination is researched out to protect person from this disease. Click the mouse represent to inject vaccines to people around the mouse.

After injecting vaccines, the probabilities for all above are changed as below:


For Healthy status:

P(becoming infected) = min((40% + (infectedTimes * 20%)), 60%)

P(infected) = max((60% - (infectedTimes * 40%)), 10%)

P(stay healthy) = min((10% + (infectedTimes * 20%)), 30%)


For Becoming Infected status:

P(infected) = max((60% - (infectedTimes * 20%)), 10%)

P(healthy) = min((40% + (infectedTimes * 20%)), 90%)


For Infected status:

P(dead) = max((40% - (infectedTimes * 50%)), 5%)

P(healthy) = min((60% + (infectedTimes * 50%)), 95%)



## This project meet the following requirements:
1. User interaction techniques
2. Animation
3. Use of an external library(Tonejs external library for creating sound)
4. Project Management(visit "issues" and "project" in github for details)
5. It is fit for all size screen to start this simulation.


To run the project:
1. download to the local computer: git clone https://github.sydney.edu.au/lcui5406/portfolio.git
2. open it with VScode.
3. go to final_project folder
4. right click the index.html and choose Open with Live Server.

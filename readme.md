
# AtlasCamp 2019 - Monitoring as Code

## Example projects

This repository contains two example projects for getting started with [@remie/nagios](https://github.com/remie/nagios).

The `simple` example project is the default example shipped with the `nagios-cli` package. It contains a replica of the
default configuration that ships with Nagios as an example of how you can achieve the same type of configuration with
Typescript using the @remie/nagios-cli project.

The `advanced` example project is the code from the Monitoring as Code presentation at AtlasCamp 2019. It showcases
how you can create a more dynamic monitoring configuration using dependency injection.

## Getting started

You can start both projects right away using `npm install` and `npm start` in their respective folders. This will
build & run the docker images for the example projects and make them available on `http://localhost:8000`. The
username/password is the Nagios default of `nagiosadmin:nagiosadmin`.

## What's next

These two projects (and specifically the 'advanced' project) are meant to give you ideas on how to implement the
@remie/nagios-cli for your pojects.

If you take into consideration the power of dependency injection and the fact that both Inversify and @remie/nagios-cli
support promises, the options are limitless. 

### Dynamic configuration

One example of a dynamic configuration is using the Amazon SDK to fetch all (sub)domains from Route53 or load balancers 
from EC2 and create availability checks for these hosts. These types of dynamic configuration generation is what will 
help you eliminate the requirement of hard-coding checks. Keep in mind that you might need to add some pre-compile 
logic if your environment is to large ;)

### Reporting & notification triggers

The goal of the @remie/nagios-cli project is not to have you stare at the Nagios web interface. That would be cruel.
But what these checks allow you to do is execute code, either within the check itself (i.e. add statsd integration 
for collecting metrics) or when notifications are triggered by Nagios.

A cool example of using the notifications is to fire self-healing commands. You might have a check for a routine
job in AWS (for instance, if there is a new version of an AMI available). Using the notification triggers, you can
automate the steps involved in updating to the latest version of the AMI. Whenever a new AMI is available, your
systems will now automatically update (disclaimer: only do this if it's safe to update without supervision).

## Need additional help?

I hope these examples inspire you to create awesome checks and allow you to make monitoring fun again.
If you need any additional help, you can always contact me (https://www.linkedin.com/in/remiebolte)
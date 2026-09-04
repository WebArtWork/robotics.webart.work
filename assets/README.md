# Robotics

Robotics is a platform for **robots, the people who operate and service
them, and the companies who build, rent, and hire them out** — not a
drone-only marketplace. Aerial drones are one robot type among many:
ground robots/UGVs, autonomous vehicles, robotic arms, underwater robots,
delivery and inspection robots all belong on the same platform, the same
way IEEE treats aerial drones as aerial robots within the broader robotics
field.

This repository is currently a static, investor-facing demo of that
product vision — real, realistic content and a fully navigable app, with
no backend or persistence behind it yet.

## Robot categories

- **Air** — FPV drones, camera/photography drones, surveying drones,
  delivery drones.
- **Ground** — wheeled/tracked robots, autonomous carts, rovers.
- **Vehicles** — autonomous cars, trucks, agricultural vehicles.
- **Industrial** — robotic arms, manufacturing systems.
- **Specialized** — inspection, rescue, cleaning, construction,
  underwater, and other purpose-built robots.

## The core entities

- **Robot** — a profile/specification for a single unit or model: type,
  manufacturer, capabilities, components, condition, and ownership.
- **Manufacturer** — a company producing robots, drones, vehicles,
  components, or complete platforms.
- **Operator** — a pilot or supervisor qualified to fly/drive/run a robot
  or class of robots, with certifications and flight/operation history.
- **Mission / Job** — a piece of work a robot (and usually an operator)
  is booked for: survey, delivery, inspection, spraying, filming, etc.,
  with location, schedule, and outcome.
- **Telemetry / Flight History** — the operational record for a unit —
  hours flown/driven, routes, sensor data, incidents — attached to the
  robot itself so it survives a change of owner or operator.
- **Maintenance / Service Record** — repairs, part replacements, and
  inspections performed on a unit, with cost and provider.
- **Component / Part** — motors, batteries, sensors, controllers, and
  other parts that make up or replace pieces of a robot.
- **Software / Firmware** — the versioned software running on a unit,
  tracked alongside its hardware history.
- **Business** — a service provider, rental company, repair shop, or
  integrator offering robots or robotic services.
- **Listing** — a robot or robotic service offered for sale, rent, or
  hire on the marketplace.

## How people use it

- **Marketplace / Rental** — buy, sell, or rent a robot, or hire a robot
  together with a qualified operator for a specific job.
- **Missions / Jobs** — post a job (survey, delivery, inspection, aerial
  filming, spraying) and match it to an available robot + operator.
- **Robot passport** — every unit's full history — flight/operation hours,
  telemetry, maintenance, parts replaced, firmware versions, past missions
  — travels with the robot, not with whichever business currently runs it.
- **Operators** — pilots and robot operators build a verifiable track
  record (certifications, hours, completed missions) that businesses can
  hire against.
- **Manufacturers & parts** — manufacturers list robots, components, and
  specifications; service providers and owners source parts and firmware
  updates.
- Every entity also has its own dedicated page showing its full profile,
  history, and related records.

## Roles

Every person or business on the platform plays one of these roles. Each
has its own marketing/onboarding page (`/for-*`):

1. **User** — a person or business looking to buy, rent, or hire robots
   or robotic services. ([/for-users](src/app/pages/for-users))
2. **Operator** — a drone/FPV pilot, robot operator, or autonomous-system
   supervisor. ([/for-operators](src/app/pages/for-operators))
3. **Business** — a service provider, rental company, repair shop, or
   integrator offering robots or robotic services.
   ([/for-businesses](src/app/pages/for-businesses))
4. **Manufacturer** — a company producing robots, drones, vehicles,
   components, or complete platforms.
   ([/for-manufacturers](src/app/pages/for-manufacturers))

Professions and business specialties (developer, engineer, repair
technician, parts supplier, drone pilot, etc.) are attributes of these
four roles, not separate roles of their own.

## Robotics as a shared, cross-industry layer

Robotics is deliberately its own top-level industry rather than a feature
bolted onto any one startup, because robots serve many other industries at
once:

- **Agriculture** — spraying/monitoring drones, autonomous tractors.
- **Automotive** — autonomous vehicles.
- **Logistics** — warehouse and delivery robots.
- **Healthcare** — medical robots.
- **Construction** — inspection and construction robots.
- **Security** — surveillance robots.
- **Manufacturing** — industrial automation.

Rather than each WAW startup building its own drone/robot layer,
Agriculture, VinHub, Healthcare, and future Logistics work can consume
Robotics — its marketplace, missions, operators, and robot passports — as
a shared service.

## Status

Static demo, no backend or persistence yet. For contributor/developer
setup and coding conventions, see [AGENTS.md](AGENTS.md).

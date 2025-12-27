export type AircraftWeight = 'bis 1000kg' | 'über 1000kg - 1600kg' | 'bis 2000kg';
export type SoundProtection = 'mit erhöhtem Schallschutz' | 'ohne erhöhten Schallschutz';

export type AircraftType =
  | 'UL-Flugzeuge'
  | 'Motorflugzeuge'
  | 'Motorsegler (alle Gewichtsklassen)'
  | 'Abweichend LFZ gemäß §25 LuftVG'
  | 'Segelflugzeuge'
  | 'Segelflugzeuge mit Motor (nicht Selbststarter)';

export type SchulflugSubType = 'Motorsegler' | 'UL' | 'Motorflugzeug';
export type FlightSubType = 'Normal' | 'Schulflug';
export type SchulflugWeight = AircraftWeight;

export type FeeDetails =
  | number
  | {
      [weight in AircraftWeight]?: number;
    }
  | {
      [subType in SchulflugSubType]?: number | { [weight in SchulflugWeight]?: number };
    };

export type SoundProtectionFees = {
  [type in AircraftType | 'Schulflüge']?: FeeDetails;
};

export type FeeMatrix = Record<SoundProtection, SoundProtectionFees>;

export const fees: Record<FlightSubType, FeeMatrix> = {
  Normal: {
    'mit erhöhtem Schallschutz': {
      'UL-Flugzeuge': 5,
      'Motorsegler (alle Gewichtsklassen)': 5,
      'Motorflugzeuge': {
        'bis 1000kg': 5,
        'über 1000kg - 1600kg': 7,
        'bis 2000kg': 10,
      },
      'Abweichend LFZ gemäß §25 LuftVG': 10,
      'Segelflugzeuge': 0,
      'Segelflugzeuge mit Motor (nicht Selbststarter)': 0,
    },
    'ohne erhöhten Schallschutz': {
      'UL-Flugzeuge': 5,
      'Motorsegler (alle Gewichtsklassen)': 7,
      'Motorflugzeuge': {
        'bis 1000kg': 7,
        'über 1000kg - 1600kg': 9,
        'bis 2000kg': 14,
      },
      'Abweichend LFZ gemäß §25 LuftVG': 14,
      'Segelflugzeuge': 0,
      'Segelflugzeuge mit Motor (nicht Selbststarter)': 0,
    },
  },
  Schulflug: {
    'mit erhöhtem Schallschutz': {
      Schulflüge: {
        Motorsegler: 3,
        UL: 3,
        Motorflugzeug: {
          'bis 1000kg': 3,
          'über 1000kg - 1600kg': 4,
          'bis 2000kg': 6,
        },
      },
    },
    'ohne erhöhten Schallschutz': {
      Schulflüge: {
        Motorsegler: 4,
        UL: 3,
        Motorflugzeug: {
          'bis 1000kg': 4,
          'über 1000kg - 1600kg': 6,
          'bis 2000kg': 8,
        },
      },
    },
  },
};

export const soundOptions = ['mit erhöhtem Schallschutz', 'ohne erhöhten Schallschutz'];

export const aircraftTypes: AircraftType[] = [
  'UL-Flugzeuge',
  'Motorsegler (alle Gewichtsklassen)',
  'Motorflugzeuge',
  'Abweichend LFZ gemäß §25 LuftVG',
  'Segelflugzeuge',
  'Segelflugzeuge mit Motor (nicht Selbststarter)',
];

export const weights: AircraftWeight[] = ['bis 1000kg', 'über 1000kg - 1600kg', 'bis 2000kg'];
export const schulflugSubTypes: SchulflugSubType[] = ['Motorsegler', 'UL', 'Motorflugzeug'];
export const flightTypes: FlightSubType[] = ['Normal', 'Schulflug'];
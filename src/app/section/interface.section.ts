import {Type} from '@angular/core';
import {DumpOptions} from 'js-yaml';
import {uuid} from '../datatype';
import {ISectionComponent} from './component/interface.component';

export interface ISection {
	/** The internal type of this section */
	readonly type: string;

	/** The human-readable name of this type of section */
	readonly prettyType: string;

	/** The component to dynamically load for editing this section */
	readonly component: Type<ISectionComponent>;

	/** A unique identifier of this section */
	readonly uuid: uuid;

	/** Describes what distributions support this type of section */
	readonly supportedDistros: string[];

	/**
	 * Used to get a YAML representation of this section.
	 * If verbose is true, all properties of the section are included with their default values
	 *
	 * @param verbose If true, include all properties with default values. Else, only include set values
	 * @param opts optional options for converting to YAML
	 * @returns YAML representation of this section
	 */
	getYaml(verbose?: boolean, opts?: DumpOptions): string;

	/**
	 *
	 * @returns {string} the tile to display for this
	 */
	getTitle(): string;
}

import { Section, SectionData } from './section';
import { Property } from './property';
import { propertyData } from '../utils';

// DEFINITION: https://cloudinit.readthedocs.io/en/latest/topics/modules.html#users-and-groups
export class UsersSection extends Section {
  private keepDefault: boolean = false;
  protected data: Array<User> = [];

  constructor() {
    // section type, supported_distros
    super("users", ["all"]);

    // DEBUG
    // this.addUser(new User("asdf"));
    // this.addUser(new User("abc"));
  }

  // add in the distro-default user if enabled
  public getData(): Array<User | string> {
    return this.keepDefault ? ["default", ...this.data] : this.data;
  }

  public addUser(user: User): void {
    this.data.push(user);
  }

  public getTitle() {
    return "Users" + (this.data.length > 0 ? ": " : "") + this.data.map(val => val.name).join(", ");
  }
}

class User extends SectionData {
  // TODO use decorators to store defaults and description (for tooltip)
  @propertyData("", "The user’s login name", false)
  name: string = "";
  expiredate?: string | Date; // Optional. Date on which the user’s account will be disabled. Default: none
  gekos?: string;             // Optional. Comment about the user, usually a comma-separated string of real name and contact information. Default: none
  groups?: string; // Optional. Comma separated list of additional groups to add the user to. Default: none
  homedir?: string; // Optional. Home dir for user. Default is /home/<username>
  inactive?: number; // Optional. Number of days after a password expires until the account is permanently disabled. Default: none
  lock_passwd?: boolean; // Optional. Disable password login. Default: true
  no_create_home?: boolean; // Optional. Do not create home directory. Default: false
  no_log_init?: boolean; // Optional. Do not initialize lastlog and faillog for user. Default: false
  no_user_group?: boolean // Optional. Do not create group named after user. Default: false
  // TODO complete list

  // Returns an object representation of the class.
  // if verbose is set and true, this returns all properties filled with default values.
  getObj(verbose?: boolean): object {
    return {}; // TODO pull list of properties from decorators and then build a obj from values (and defaults if verbose)
  }

  getProperties(): Array<Property> {
    // TODO pull list of properties from decorators
    return [];
  }
}

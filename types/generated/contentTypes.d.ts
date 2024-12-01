import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    lastname: Attribute.String;
    phone: Attribute.String;
    firstname: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAccommodationAccommodation extends Schema.CollectionType {
  collectionName: 'accommodations';
  info: {
    singularName: 'accommodation';
    pluralName: 'accommodations';
    displayName: 'accommodations';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Attribute.String;
    amenities: Attribute.JSON;
    check_in_time: Attribute.DateTime;
    check_out_time: Attribute.DateTime;
    name: Attribute.String;
    type: Attribute.String;
    event_id: Attribute.Relation<
      'api::accommodation.accommodation',
      'oneToOne',
      'api::event.event'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::accommodation.accommodation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::accommodation.accommodation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiActivitieActivitie extends Schema.CollectionType {
  collectionName: 'activities';
  info: {
    singularName: 'activitie';
    pluralName: 'activities';
    displayName: 'activities';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Blocks;
    schedule: Attribute.Date;
    event_id: Attribute.Relation<
      'api::activitie.activitie',
      'oneToOne',
      'api::event.event'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::activitie.activitie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::activitie.activitie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactContact extends Schema.CollectionType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: 'contact';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    firstname: Attribute.String;
    lastname: Attribute.String;
    email: Attribute.Email;
    message: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDiscountDiscount extends Schema.CollectionType {
  collectionName: 'discounts';
  info: {
    singularName: 'discount';
    pluralName: 'discounts';
    displayName: 'discounts';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Attribute.String;
    end_date: Attribute.DateTime;
    start_date: Attribute.DateTime;
    percentage: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::discount.discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::discount.discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDiscountCodeDiscountCode extends Schema.CollectionType {
  collectionName: 'discount_codes';
  info: {
    singularName: 'discount-code';
    pluralName: 'discount-codes';
    displayName: 'discountCode';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.Decimal;
    state: Attribute.Enumeration<['val', 'por']>;
    event_id: Attribute.Relation<
      'api::discount-code.discount-code',
      'oneToOne',
      'api::event.event'
    >;
    amount: Attribute.Integer;
    amount_max: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::discount-code.discount-code',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::discount-code.discount-code',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmergencyServiceEmergencyService
  extends Schema.CollectionType {
  collectionName: 'emergency_services';
  info: {
    singularName: 'emergency-service';
    pluralName: 'emergency-services';
    displayName: 'emergencyServices';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    details: Attribute.Blocks;
    service_type: Attribute.String;
    event_id: Attribute.Relation<
      'api::emergency-service.emergency-service',
      'oneToOne',
      'api::event.event'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::emergency-service.emergency-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::emergency-service.emergency-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    singularName: 'event';
    pluralName: 'events';
    displayName: 'events';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contact_email: Attribute.Email;
    contact_phone: Attribute.String;
    description: Attribute.Blocks;
    detailed_description: Attribute.Blocks;
    end_time: Attribute.Time;
    event_date: Attribute.Date;
    event_name: Attribute.String;
    has_seating: Attribute.Boolean;
    location: Attribute.String;
    start_time: Attribute.Time;
    youtube_video_url: Attribute.String;
    event_category_id: Attribute.Relation<
      'api::event.event',
      'oneToMany',
      'api::event-categorie.event-categorie'
    >;
    event_type_id: Attribute.Relation<
      'api::event.event',
      'oneToMany',
      'api::event-type.event-type'
    >;
    event_gender_id: Attribute.Relation<
      'api::event.event',
      'oneToMany',
      'api::event-gender.event-gender'
    >;
    organizer_id: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    seatmap_id: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'api::seat-map.seat-map'
    >;
    venue_id: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'api::venue.venue'
    >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status_event_id: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'api::status-event.status-event'
    >;
    event_age_restriction_id: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'api::event-age-restriction.event-age-restriction'
    >;
    place_id: Attribute.String;
    url_name: Attribute.String;
    id_event: Attribute.String;
    location_comp: Attribute.String;
    venue: Attribute.String;
    imageMap: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventAgeRestrictionEventAgeRestriction
  extends Schema.CollectionType {
  collectionName: 'event_age_restrictions';
  info: {
    singularName: 'event-age-restriction';
    pluralName: 'event-age-restrictions';
    displayName: 'eventAgeRestrictions';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event-age-restriction.event-age-restriction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event-age-restriction.event-age-restriction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventCategorieEventCategorie extends Schema.CollectionType {
  collectionName: 'event_categories';
  info: {
    singularName: 'event-categorie';
    pluralName: 'event-categories';
    displayName: 'eventCategories';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event-categorie.event-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event-categorie.event-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventGenderEventGender extends Schema.CollectionType {
  collectionName: 'event_genders';
  info: {
    singularName: 'event-gender';
    pluralName: 'event-genders';
    displayName: 'eventGenre';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event-gender.event-gender',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event-gender.event-gender',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventTypeEventType extends Schema.CollectionType {
  collectionName: 'event_types';
  info: {
    singularName: 'event-type';
    pluralName: 'event-types';
    displayName: 'eventType';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event-type.event-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event-type.event-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMealPlanMealPlan extends Schema.CollectionType {
  collectionName: 'meal_plans';
  info: {
    singularName: 'meal-plan';
    pluralName: 'meal-plans';
    displayName: 'mealPlans';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    details: Attribute.JSON;
    event_id: Attribute.Relation<
      'api::meal-plan.meal-plan',
      'oneToOne',
      'api::event.event'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::meal-plan.meal-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::meal-plan.meal-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNotificationNotification extends Schema.CollectionType {
  collectionName: 'notifications';
  info: {
    singularName: 'notification';
    pluralName: 'notifications';
    displayName: 'notifications';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sent_at: Attribute.DateTime;
    user_id: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    message: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderOrder extends Schema.CollectionType {
  collectionName: 'orders';
  info: {
    singularName: 'order';
    pluralName: 'orders';
    displayName: 'orders';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    strype_id: Attribute.String;
    event_id: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'api::event.event'
    >;
    user_id: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    total_price: Attribute.Decimal;
    price: Attribute.JSON;
    status_order_id: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'api::status-order.status-order'
    >;
    id_order: Attribute.String;
    smsEmail: Attribute.Boolean;
    discount_code_id: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'api::discount-code.discount-code'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPackageOptionPackageOption extends Schema.CollectionType {
  collectionName: 'package_options';
  info: {
    singularName: 'package-option';
    pluralName: 'package-options';
    displayName: 'packageOptions';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Blocks;
    price: Attribute.Integer;
    event_id: Attribute.Relation<
      'api::package-option.package-option',
      'oneToOne',
      'api::event.event'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::package-option.package-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::package-option.package-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnersVendorPartnersVendor extends Schema.CollectionType {
  collectionName: 'partners_vendors';
  info: {
    singularName: 'partners-vendor';
    pluralName: 'partners-vendors';
    displayName: 'partnersVendors';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    contact_info: Attribute.Blocks;
    type: Attribute.String;
    event_id: Attribute.Relation<
      'api::partners-vendor.partners-vendor',
      'oneToOne',
      'api::event.event'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partners-vendor.partners-vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::partners-vendor.partners-vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaymentPayment extends Schema.CollectionType {
  collectionName: 'payments';
  info: {
    singularName: 'payment';
    pluralName: 'payments';
    displayName: 'payments';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    amount: Attribute.Integer;
    payment_date: Attribute.DateTime;
    payment_method: Attribute.String;
    order_id: Attribute.Relation<
      'api::payment.payment',
      'oneToOne',
      'api::order.order'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment.payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payment.payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPluginPlugin extends Schema.SingleType {
  collectionName: 'plugins';
  info: {
    singularName: 'plugin';
    pluralName: 'plugins';
    displayName: 'plugins';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    state: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::plugin.plugin',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::plugin.plugin',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.SingleType {
  collectionName: 'privacy_policies';
  info: {
    singularName: 'privacy-policy';
    pluralName: 'privacy-policies';
    displayName: 'privacy-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeatMapSeatMap extends Schema.CollectionType {
  collectionName: 'seat_maps';
  info: {
    singularName: 'seat-map';
    pluralName: 'seat-maps';
    displayName: 'seatMaps';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    configuration: Attribute.JSON;
    venue_id: Attribute.Relation<
      'api::seat-map.seat-map',
      'oneToOne',
      'api::venue.venue'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seat-map.seat-map',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seat-map.seat-map',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceFeeServiceFee extends Schema.SingleType {
  collectionName: 'service_fees';
  info: {
    singularName: 'service-fee';
    pluralName: 'service-fees';
    displayName: 'ServiceFee';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    priceToCharge: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-fee.service-fee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-fee.service-fee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStatusEventStatusEvent extends Schema.CollectionType {
  collectionName: 'status_events';
  info: {
    singularName: 'status-event';
    pluralName: 'status-events';
    displayName: 'statusEvents';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::status-event.status-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::status-event.status-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStatusOrderStatusOrder extends Schema.CollectionType {
  collectionName: 'status_orders';
  info: {
    singularName: 'status-order';
    pluralName: 'status-orders';
    displayName: 'statusOrders';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::status-order.status-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::status-order.status-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStatusPaymentStatusPayment extends Schema.CollectionType {
  collectionName: 'status_payments';
  info: {
    singularName: 'status-payment';
    pluralName: 'status-payments';
    displayName: 'statusPayments';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::status-payment.status-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::status-payment.status-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamAccessTeamAccess extends Schema.CollectionType {
  collectionName: 'team_accesses';
  info: {
    singularName: 'team-access';
    pluralName: 'team-accesses';
    displayName: 'teamAccess';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    id_teamAcces: Attribute.String;
    state: Attribute.Boolean;
    event_id: Attribute.Relation<
      'api::team-access.team-access',
      'oneToOne',
      'api::event.event'
    >;
    user_id: Attribute.Relation<
      'api::team-access.team-access',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    email_access: Attribute.String;
    team_type_role_id: Attribute.Relation<
      'api::team-access.team-access',
      'oneToOne',
      'api::team-type-role.team-type-role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::team-access.team-access',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::team-access.team-access',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamTypeRoleTeamTypeRole extends Schema.CollectionType {
  collectionName: 'team_type_roles';
  info: {
    singularName: 'team-type-role';
    pluralName: 'team-type-roles';
    displayName: 'teamTypeRole';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::team-type-role.team-type-role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::team-type-role.team-type-role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTermsAndConditionTermsAndCondition
  extends Schema.SingleType {
  collectionName: 'terms_and_conditions';
  info: {
    singularName: 'terms-and-condition';
    pluralName: 'terms-and-conditions';
    displayName: 'terms-and-conditions';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::terms-and-condition.terms-and-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::terms-and-condition.terms-and-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTicketTicket extends Schema.CollectionType {
  collectionName: 'tickets';
  info: {
    singularName: 'ticket';
    pluralName: 'tickets';
    displayName: 'tickets';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    scanner: Attribute.Boolean;
    order_id: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'api::order.order'
    >;
    ticket_type_id: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'api::ticket-type.ticket-type'
    >;
    scanner_date: Attribute.DateTime;
    id_ticket: Attribute.String;
    event_id: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'api::event.event'
    >;
    user_id: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTicketSalesPeriodTicketSalesPeriod
  extends Schema.CollectionType {
  collectionName: 'ticket_sales_periods';
  info: {
    singularName: 'ticket-sales-period';
    pluralName: 'ticket-sales-periods';
    displayName: 'ticketSalesPeriods';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    end_date: Attribute.Date;
    end_time: Attribute.Time;
    start_date: Attribute.Date;
    start_time: Attribute.Time;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ticket-sales-period.ticket-sales-period',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ticket-sales-period.ticket-sales-period',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTicketTypeTicketType extends Schema.CollectionType {
  collectionName: 'ticket_types';
  info: {
    singularName: 'ticket-type';
    pluralName: 'ticket-types';
    displayName: 'ticketTypes';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.Decimal;
    description: Attribute.Blocks;
    max_capacity: Attribute.Integer;
    event_capacity: Attribute.Integer;
    max_quantity_limit: Attribute.Integer;
    min_quantity_limit: Attribute.Integer;
    is_visible: Attribute.Boolean;
    soldOut: Attribute.Boolean;
    event_id: Attribute.Relation<
      'api::ticket-type.ticket-type',
      'oneToOne',
      'api::event.event'
    >;
    ticket_sales_period_id: Attribute.Relation<
      'api::ticket-type.ticket-type',
      'oneToOne',
      'api::ticket-sales-period.ticket-sales-period'
    >;
    available: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ticket-type.ticket-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ticket-type.ticket-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTransportationTransportation extends Schema.CollectionType {
  collectionName: 'transportations';
  info: {
    singularName: 'transportation';
    pluralName: 'transportations';
    displayName: 'transportation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    details: Attribute.Blocks;
    event_id: Attribute.Relation<
      'api::transportation.transportation',
      'oneToOne',
      'api::event.event'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transportation.transportation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::transportation.transportation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTravelPackageTravelPackage extends Schema.CollectionType {
  collectionName: 'travel_packages';
  info: {
    singularName: 'travel-package';
    pluralName: 'travel-packages';
    displayName: 'travelPackages';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    description: Attribute.Blocks;
    price: Attribute.Integer;
    event_id: Attribute.Relation<
      'api::travel-package.travel-package',
      'oneToOne',
      'api::event.event'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::travel-package.travel-package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::travel-package.travel-package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUserPreferenceUserPreference extends Schema.CollectionType {
  collectionName: 'user_preferences';
  info: {
    singularName: 'user-preference';
    pluralName: 'user-preferences';
    displayName: 'userPreferences';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    preferences: Attribute.JSON;
    user_id: Attribute.Relation<
      'api::user-preference.user-preference',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-preference.user-preference',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-preference.user-preference',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVenueVenue extends Schema.CollectionType {
  collectionName: 'venues';
  info: {
    singularName: 'venue';
    pluralName: 'venues';
    displayName: 'venue';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Attribute.String;
    capacity: Attribute.Integer;
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::venue.venue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::venue.venue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::accommodation.accommodation': ApiAccommodationAccommodation;
      'api::activitie.activitie': ApiActivitieActivitie;
      'api::contact.contact': ApiContactContact;
      'api::discount.discount': ApiDiscountDiscount;
      'api::discount-code.discount-code': ApiDiscountCodeDiscountCode;
      'api::emergency-service.emergency-service': ApiEmergencyServiceEmergencyService;
      'api::event.event': ApiEventEvent;
      'api::event-age-restriction.event-age-restriction': ApiEventAgeRestrictionEventAgeRestriction;
      'api::event-categorie.event-categorie': ApiEventCategorieEventCategorie;
      'api::event-gender.event-gender': ApiEventGenderEventGender;
      'api::event-type.event-type': ApiEventTypeEventType;
      'api::meal-plan.meal-plan': ApiMealPlanMealPlan;
      'api::notification.notification': ApiNotificationNotification;
      'api::order.order': ApiOrderOrder;
      'api::package-option.package-option': ApiPackageOptionPackageOption;
      'api::partners-vendor.partners-vendor': ApiPartnersVendorPartnersVendor;
      'api::payment.payment': ApiPaymentPayment;
      'api::plugin.plugin': ApiPluginPlugin;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::seat-map.seat-map': ApiSeatMapSeatMap;
      'api::service-fee.service-fee': ApiServiceFeeServiceFee;
      'api::status-event.status-event': ApiStatusEventStatusEvent;
      'api::status-order.status-order': ApiStatusOrderStatusOrder;
      'api::status-payment.status-payment': ApiStatusPaymentStatusPayment;
      'api::team-access.team-access': ApiTeamAccessTeamAccess;
      'api::team-type-role.team-type-role': ApiTeamTypeRoleTeamTypeRole;
      'api::terms-and-condition.terms-and-condition': ApiTermsAndConditionTermsAndCondition;
      'api::ticket.ticket': ApiTicketTicket;
      'api::ticket-sales-period.ticket-sales-period': ApiTicketSalesPeriodTicketSalesPeriod;
      'api::ticket-type.ticket-type': ApiTicketTypeTicketType;
      'api::transportation.transportation': ApiTransportationTransportation;
      'api::travel-package.travel-package': ApiTravelPackageTravelPackage;
      'api::user-preference.user-preference': ApiUserPreferenceUserPreference;
      'api::venue.venue': ApiVenueVenue;
    }
  }
}

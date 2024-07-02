import { parse, toSeconds } from 'iso8601-duration';
import { v5 as uuidv5 } from 'uuid';
enum dbKeys {
  ID = '_id',
  FIRST_NAME = 'first_name',
  LAST_NAME = 'last_name',
  FULL_NAME = 'full_name',
  PROFILE_PIC = 'profile_pic',
  ADDRESS_ID = 'address_id',
  MOBILE_NUMBER = 'mobile_number',
  MOBILE_NUMBER_COUNTRY_CODE = 'mobile_number_country_code',
  EMAIL = 'email',
  GPS = 'gps',
  CITY = 'city',
  STATE = 'state',
  PINCODE = 'pincode',
  COUNTRY = 'country',
  ADDRESS_LINE_1 = 'address_line_1',
  ADDRESS_LINE_2 = 'address_line_2',
  HOUSE_NO = 'house_no',
  ADDRESS_TYPE = 'address_type',
  DEFAULT = 'default',
  REFRESH_TOKEN = 'refresh_token',
  ROLE = 'role',
  ROLES = 'roles',
  VALUE = 'value',
  DATA = 'data',
  TXN_ID = 'txn_id',
  MSG_ID = 'msg_id',
  STEP = 'step',
  SEARCH1 = 'search1',
  SEARCH2 = 'search2',
  SEARCH3 = 'search3',
  SELECT1 = 'select1',
  SELECT2 = 'select2',
  INIT1 = 'init1',
  INIT2 = 'init2',
  INIT3 = 'init3',
  INIT4 = 'init4',
  CONFIRM = 'confirm',
  USER_ID = 'user_id',
  STATUS = 'status',
  UPDATE = 'update',
  UPDATE_REQUESTS = 'update_requests',
  STATUS_RESPONSES = 'status_responses',
  PAYMENT_DETAILS = 'payment_details',
  SUMMARY = 'summary',
  DETAILS = 'details',
  FORM = 'form',
  RESPONSE = 'response',

  PROVIDER_DESCRIPTOR = 'provider_descriptor',
  ITEM_DESCRIPTOR = 'item_descriptor',
  ITEM_PRICE = 'item_price',
  QUOTE_ID = 'quote_id',
  QUOTE_PRICE = 'quote_price',
  QUOTE_BREAKUP = 'quote_breakup',
  CATEGORY = 'category',
  PROVIDER_TAGS = 'provider_tags',
  ITEM_TAGS = 'item_tags',
  FORM_ID = 'form_id',
  FORM_URL = 'from_url',
  ITEM_ID = 'item_id',
  PROVIDER_ID = 'provider_id',
  BPP_ID = 'bpp_id',
  BPP_URI = 'bpp_uri',
  EXPIRES_AT = 'expires_at',
  PAYMENTS = 'payments',
  CANCELLATION_TERMS = 'cancellation_terms',
  FULFILLMENTS = 'fulfillments',
  DOCUMENTS = 'documents',
  OFFER = 'offer',
  OFFER_ID = 'offer_id',
  ORDER_ID = 'order_id',

  CONSENTS = 'consents',
  CONSENT = 'consent',
  REQUEST_DATA = 'request_data',
  REQUEST = 'request',
  FORM_STATUS = 'form_status',
  FORM_SUBMISSION_ID = 'form_submission_id',
  CATALOG = 'catalog',
  FORM_REQUEST_DATA = 'form_request_data',
  DOC_ID = 'doc_id',
  REMARKS = 'remarks',
}
const checkKeyIsPresent = (value: string, data: object) => {
  return Object.keys(data).includes(value);
};
const known8601Keys: string[] = [
  'COOL_OFF_PERIOD',
  // 'INSTALLMENT_AMOUNT',
  'SETTLEMENT_WINDOW',
];
const iso8601Parser = (isoDuration: string) => {
  try {
    const parsedDuration = parse(isoDuration);
    const now = new Date();
    const totalSeconds = toSeconds(parsedDuration);
    const expirationDate = new Date(
      now.getTime() + totalSeconds * 1000
    ).toISOString();
    return expirationDate;
  } catch (err) {
    console.error(err);
  }
};

const getFilteredTagsObject = (tags: object[]) => {
  return tags.map((tag) => {
    const tagDescriptor =
      tag['descriptor']['name'] || tag['descriptor']['code'];
    const tagList = tag['list'];
    const tagDisplay = tag['display'];
    const finalTagObj = {};
    for (const tag of tagList) {
      const tagValue = tag['value'];
      const tagName = tag['descriptor']['name'] || tag['descriptor']['code'];
      if (known8601Keys.includes(tagName)) {
        finalTagObj[tagName] = iso8601Parser(tagValue);
      } else {
        finalTagObj[tagName] = tagValue;
      }
    }
    return {
      name: tagDescriptor,
      display: tagDisplay,
      tags: finalTagObj,
    };
  });
};
const generateDateString = (hours: number = 0) => {
  const date = new Date();
  return new Date(date.setHours(date.getHours() + hours)).toISOString();
};
const getUUID = (value = generateDateString()) => {
  return uuidv5(value, '1b671a64-40d5-491e-99b0-da01ff1f3341');
};
export { dbKeys, checkKeyIsPresent, getFilteredTagsObject };

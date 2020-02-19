"use strict";
module.exports = {
  MDMSG_BASE_UNKNOWND:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nUnknown error",
  MDMSG_BASE_CONFIG_VALUE_NOT_FOUND:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nConfig value not found: ",
  MDMSG_BASE_DB_QUERY_ERROR:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nDB query error.",
  MDMSG_BASE_INVALID_CONFIG: "Invalid configuration.",
  MDMSG_CM_NOT_IMPLEMENTED: "Not implemented.",
  MDMSG_CM_SERVER_INTERNAL_ERROR:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nInternal server error.",
  MDMSG_CM_INVALID_VALUE: "Invalid value.",
  MDMSG_CM_UNSUCCESSFUL_HTTP_STATUS_CODE: "Undefined HTTP status code: ",
  MDMSG_CM_DBC_USE_SEQUENCE_ERROR:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nDbc sequence error",
  MDMSG_CM_DBC_IN_ERROR_STATE:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nDbc is in error state",
  MDMSG_CM_CHILD_INIT_FAILED:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nDbc child init failed",
  MDMSG_CM_NO_DB_CONNECTION:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nNo Db connection",
  MDMSG_CM_SERVICE_UNAVAILABLE:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nService unavailable",
  MDMSG_CM_INVALID_PACKET:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nRecived packet from the CPE Cannot be handled.",
  MDMSG_CM_INVALID_PARAMETER:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nDbc has invalid parameters",
  MDMSG_CM_NOT_MATCHED_PARAMETER:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nDbc not matched parameter",
  MDMSG_CM_INVALID_COMMAND: "Invalid command: ",
  MDMSG_CM_TIMEOUT: "Timeout.",
  MDMSG_CM_GENERIC: "Generic error.",
  MDMSG_CM_UNIQUE_CONSTRAINT_VIOLATION: "Unique constraint violation.",
  MDMSG_TS_GENERIC:
    "Sorry, internal server error occurred. Please contact the service team with the following error message. \r\nServer error.",
  MDMSG_TS_INVALID_COOKIE: "Invalid cookie",
  MDMSG_TS_INVALID_CWMP_STATE: "Invalid CWMP state.",
  MDMSG_TS_INVALID_XML: "Invalid XML.",
  MDMSG_TS_CPE_NOT_EXISTS: "CPE does not exist.",
  MDMSG_TS_CPE_ALREADY_EXISTS: "CPE already exists.",
  MDMSG_TS_CPE_FAULT: "The fault response from the CPE has been received",
  MDMSG_TS_CPE_REGISTRATION: "No more CPE can be registered",
  MDMSG_TS_INVALID_CPE_RESPONSE_NAME: "Invalid CPE response.",
  MDMSG_TS_NO_CONNECTION_REQUEST_URL: "No connection request URL for CPE.",
  MDMSG_TS_INVALID_METHOD: "Invalid method: ",
  MDMSG_TS_SESSION_ALREADY_EXISTS: "Session already exists.",
  MDMSG_TS_INVALID_SESSION: "Invalid session.",
  MDMSG_TS_CWMPSESSION_TERMINATED_UNSUCCESSFULLY:
    "CPE session terminated unsuccessfully.",
  MDMSG_TS_INVALID_COMMAND: "Invalid command: ",
  MDMSG_TS_CPE_UNIQUE_ID_NOT_FOUND: "CPE unique id not found.",
  MDMSG_TS_CONNETION_REQUEST_TIMEOUT: "Connection request timeout: ",
  MDMSG_TS_CPE_REQUEST_TIMEOUT: "CPE request timeout; CPE not responding.",
  MDMSG_TS_CWMPSESSION_TIMEOUT: "CPE session timeout.",
  MDMSG_TS_REQUEST_WAIT_TOO_LATE: "Invalid CPE response.",
  MDMSG_TS_INVALID_PLD_EXPRESSION: "Invalid PLD expression: ",
  MDMSG_TS_CONNETION_REQUEST_FAILED: "Connection request failed: ",
  MDMSG_TS_INVALID_ALARM: "Invalid alarm.",
  MDMSG_TS_ALARM_LEVEL_CHANGED_WHILE_SETTING:
    "Alarm level changed while setting.",
  MDMSG_TS_CANNOT_AUTO_REGISTER_CPE: "Cannot auto-register CPE.",
  MDMSG_TS_INVALID_COMMAND_KEY: "Invalid command key.",
  MDMSG_TS_SERVER_RESTARTED: "Server restarted.",
  MDMSG_TS_INVALID_COMMANDEXEC: "Command execution error.",
  MDMSG_TS_SCRIPT_TEXT_TOO_LONG: "Script text is too long.",
  MDMSG_TS_INVALID_SCRIPT: "Error on saving the script.",
  MDMSG_TS_INVALID_COMMANDLOG: "Error on recording the command log.",
  MDMSG_TS_SETPARAMETERVALUES_VERIFY_FAILED:
    "SetParameterValues verification failed.",
  MDMSG_TS_COMMAND_EXECUTION_SKIPPED_FOR_NOT_RESPONDING_CPE:
    "Command execution skipped for a not-responding CPE",
  MDMSG_TS_SERVER_SHUTDOWN: "Server shut down.",
  MDMSG_TS_MAX_NUM_SESSION_REACHED: "Maximum number of CWMP session reached.",
  MDMSG_TS_SIE_INVALID_CPE_RESPONSE_NAME: "Invalid CPE response : ",
  MDMSG_TS_IVX_MULTIPLE_URI_MATCH: "Multiple namespace uri match.",
  MDMSG_TS_IVX_INVALID_NAMESPACE_PREFIX_FOR_ATTR:
    "Invalid namespace prefix for attribute.",
  MDMSG_TS_ETC_CANNOT_SEND_CONNECTION_REQUEST:
    "Cannot send connection request to the CPE.",
  MDMSG_TS_UNKNOWN_CUSTOM_REQUEST: "Unknown custom request: ",
  MDMSG_TS_FAULT_NO_METHOD: "Invalid method has been called.",
  MDMSG_TS_FAULT_METHOD_NOT_SUPPORTED: "Method not supported: ",
  MDMSG_TS_DUPLICATE_STATISTICS: "The statistics are duplicates.",
  MDMSG_TS_INVALID_STATISTICS_STARTTIME: "Invalid statistics start time.",
  MDMSG_TS_DUPLICATE_CALLFAILS: "The call fails are duplicates.",
  MDMSG_TS_INVALID_STAT_STARTTIME: "The statistics start are Invalid.",
  MDMSG_AS_INVALID_COMMAND: "Invalid command: ",
  MDMSG_AS_NOT_LOGGED_IN: "Not logged in. Session may have been expired.",
  MDMSG_AS_ALREADY_LOGGED_IN: "Already logged in.",
  MDMSG_AS_INVALID_LOGIN: "Invalid login.",
  MDMSG_AS_INVALID_PARAMETERMANAGE: "Invalid parameter manage: ",
  MDMSG_AS_INVALID_COMMANDMANAGER: "Error on Command Manager: ",
  MDMSG_AS_INVALID_DEVICEMANAGER: "Error on Device Manager: ",
  MDMSG_AS_INVALID_TACMANAGER: "Error on TAC Manager: ",
  MDMSG_AS_INVALID_SMSMANAGER: "Error on SMS Manager: ",
  MDMSG_AS_INVALID_MONITORINGMANAGER: "Error on Monitoring Manager: ",
  MDMSG_AS_INVALID_CALLFAILHISTORY: "Error on CallFailHistory: ",
  MDMSG_AS_OVER_MAX_CONNECTION: "Exceed the maximum connection number of User.",
  MDMSG_AS_CPE_NOT_EXISTS: "CPE does not exist.",
  MDMSG_AS_CPE_REGISTRATION:
    "You cannot add any more HeNB because you have already registered ",
  MDMSG_AS_INVALID_FEATURE:
    "This HeMS can not support this feature in current Femto.",
  MDMSG_AS_INVALID_CPEID: "Invalid Cpe ID.",
  MDMSG_AS_INVALID_USERMANAGER: "Error on user manager: ",
  MDMSG_AS_INVALID_PLDMANAGER: "Error on PLD manager: ",
  MDMSG_AS_INVALID_ALARMMANAGER: "Error on alarm manager: ",
  MDMSG_AS_INVALID_GROUPMANAGER: "Error on Group manager: ",
  MDMSG_AS_INVALID_COMMAND_FAVORITE: "Error on Command favorite: ",
  MDMSG_AS_INVALID_PRECONFIG: "Error on Pre-configuration: ",
  MDMSG_AS_INVALID_IPPOOL: "Error on IP Pool: ",
  MDMSG_AS_INVALID_CPESTATISTICSMANAGER: "Error on Statistics manager: ",
  MDMSG_AS_INVALID_ALARM: "Error on turning off the alarm.",
  MDMSG_AS_INVALID_LOGIN_INFO: "Invalid user ID or password.",
  MDMSG_AS_INVALID_GROUP: "Error on loading Group info.",
  MDMSG_AS_INVALID_USER: "Error on loading User ID.",
  MDMSG_AS_GROUP_ACCESS_DENIED: "Invalid path for Group info access.",
  MDMSG_AS_INVALID_FIRMWARE: "Error on loading firmware table.",
  MDMSG_AS_DUPLICATION_FIRMWARE_TARGET_INFO:
    "The firmware target information is duplicated.",
  MDMSG_AS_INVALID_NEIGHBORMANAGER: "Error on Neighbor manager",
  MDMSG_AS_INVALID_PASSWORD: "Invalid password.",
  MDMSG_AS_INVALID_LOGIN_EXPIRED:
    "This Account is Expired. Please Contact Administrator.",
  MDMSG_AS_INVALID_LOGIN_EXPIRED_SOON:
    "This Account will expire soon. Please Contact Administrator.",
  MDMSG_AS_MAX_NUM_SESSION_REACHED:
    "Cannot log in. Maximum number of users logged in.",
  MDMSG_AS_INVALID_ACCOUNT_LEVEL: "This Account cannot import files.",
  MDMSG_AS_PERMISSION_DENIED: "Permission denied.",
  MDERR_AS_OVER_TRY_NUMBER: "you entered wrong password than 5 times",
  MDERR_AS_ASK_JOIN_AUTH: "not yet approved",
  MDMSG_AS_INVALID_LOGIN_WRONG:
    "This ID is Ban because you entered wrong password 5 times. Please Contact Administrator.",
  MDMSG_AS_INVALID_LOGIN_YET: "Your account has not been yet approved",
  MDMSG_AS_FAILED_DELETE_USER_EXISTING_GROUP:
    "The user existing group cannot be deleted.",
  MDMSG_AS_FAILED_DELETE_DEVICE_EXISTING_GROUP:
    "The device existing group cannot be deleted.",
  MDMSG_AS_DUPLICATION_GROUP: "The group name is duplicated.",
  MDMSG_AS_DUPLICATION_USERNAME: "The user name is duplicated.",
  MDMSG_AS_DUPLICATION_COMMAND_FAVORITE_NAME:
    "The favorite name is duplicated.",
  MDMSG_AS_DUPLICATION_CPENAME: "The cpe name is duplicated.",
  MDMSG_AS_DUPLICATION_PRECONFIG_TEMPLATE_NAME:
    "The pre-configuration template name is duplicated.",
  MDMSG_AS_NOT_FOUND_PRECONFIG_TEMPLATE:
    "The pre-configuration template not found.",
  MDMSG_AS_NOT_REMOVE_REGISTERED_DEVICE_PRECONFIG_TEMPLATE:
    "The pre-configuration template cannot be removed because it has assigned device(s).",
  MDMSG_AS_DUPLICATION_IPPOOL_NAME: "The IP Pool name is duplicated.",
  MDMSG_AS_NOT_DELETE_USED_IPPOOL:
    "Can’t delete the Pool information, because of assigned IP address to device.",
  MDMSG_AS_INVALID_IEEE1588: "Error on IEEE1588 Manager.",
  MDMSG_AS_INVALID_INITCPEMANAGER:
    "Invalid information for Initial HeMS Cpe Manager.",
  MDMSG_AS_INVALID_INITSETMANAGER:
    "Invalid information for Initial HeMS Setting Manager.",
  MDMSG_AS_INVALID_INITSNIFFMANAGER:
    "Invalid information for Initial HeMS SniffInfo Manager.",
  MDMSG_AS_INVALID_INITUSERMANAGER:
    "Invalid information for Initial HeMS User Manager.",
  MDMSG_AS_INVALID_SONCPEMANAGER: "Invalid information for Son Cpe Manager.",
  MDMSG_AS_INVALID_SONLOGMANAGER: "Invalid information for Son Log Manager.",
  MDMSG_AS_INVALID_SONSETMANAGER:
    "Invalid information for Son Setting Manager.",
  MDMSG_AS_INVALID_BATCHJOB: "Error on Batch Job command",
  MDMSG_AS_INVALID_PINGJOB: "Error on Ping Job command",
  MDERR_AS_INVALID_CALLBACK_DATA: "Error on callback function",
  MDMSG_AS_UNIQUE_CONSTRAINT_VIOLATION: "Unique constraint violation.",
  MDMSG_AS_EXCEED_DEVICE_IMPORT_MAX: "Exceeded maximum import count.",
  MDMSG_AS_EXCEED_MAX_FIRMWARE: "Exceeded maximum firmware count.",
  MDMSG_AS_EXCEED_MAX_USER: "Exceeded maximum user count.",
  MDMSG_AS_EXCEED_MAX_COMMAND_FAVORITE: "Exceeded maximum favorites count.",
  MDMSG_AS_DUPLICATION_ALL_AUTO_FIRMWARE_UPGRADE_INFO:
    "All automatic firmware upgrade information is duplicated.",
  MDMSG_AS_DELETE_FAIL: "Delete Fail.",
  MDMSG_HA_CCONNECTION_TO_PEER_TIMEOUT: "Connection to peer timeout.",
  MDMSG_HA_SERVER_DOWN: "Server down."
};

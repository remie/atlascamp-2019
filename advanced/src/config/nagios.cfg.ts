
export default {
  log_file: '/usr/local/nagios/var/nagios.log',
  object_cache_file: '/usr/local/nagios/var/objects.cache',
  precached_object_file: '/usr/local/nagios/var/objects.precache',
  status_file: '/usr/local/nagios/var/status.dat',
  status_update_interval: 10,
  nagios_user: 'nagios',
  nagios_group: 'nagios',
  check_external_commands: true,
  command_file: '/usr/local/nagios/var/rw/nagios.cmd',
  lock_file: '/usr/local/nagios/var/nagios.lock',
  temp_file: '/usr/local/nagios/var/nagios.tmp',
  temp_path: '/tmp',
  event_broker_options: -1,
  log_rotation_method: 'd',
  log_archive_path: '/usr/local/nagios/var/archives',
  use_syslog: true,
  log_notifications: true,
  log_service_retries: true,
  log_host_retries: true,
  log_event_handlers: true,
  log_initial_states: false,
  log_current_states: true,
  log_external_commands: true,
  log_passive_checks: true,
  service_inter_check_delay_method: 's',
  max_service_check_spread: 30,
  service_interleave_factor: 's',
  host_inter_check_delay_method: 's',
  max_host_check_spread: 30,
  max_concurrent_checks: 0,
  check_result_reaper_frequency: 10,
  max_check_result_reaper_time: 30,
  check_result_path: '/usr/local/nagios/var/spool/checkresults',
  max_check_result_file_age: 3600,
  cached_host_check_horizon: 15,
  cached_service_check_horizon: 15,
  enable_predictive_host_dependency_checks: true,
  enable_predictive_service_dependency_checks: true,
  soft_state_dependencies: false,
  auto_reschedule_checks: false,
  auto_rescheduling_interval: 30,
  auto_rescheduling_window: 180,
  service_check_timeout: 60,
  host_check_timeout: 30,
  event_handler_timeout: 30,
  notification_timeout: 30,
  ocsp_timeout: 5,
  perfdata_timeout: 5,
  retain_state_information: true,
  state_retention_file: '/usr/local/nagios/var/retention.dat',
  retention_update_interval: 60,
  use_retained_program_state: true,
  use_retained_scheduling_info: true,
  retained_host_attribute_mask: 0,
  retained_service_attribute_mask: 0,
  retained_process_host_attribute_mask: 0,
  retained_process_service_attribute_mask: 0,
  retained_contact_host_attribute_mask: 0,
  retained_contact_service_attribute_mask: 0,
  interval_length: 60,
  check_for_updates: true,
  bare_update_check: false,
  use_aggressive_host_checking: false,
  execute_service_checks: true,
  accept_passive_service_checks: true,
  execute_host_checks: true,
  accept_passive_host_checks: true,
  enable_notifications: true,
  enable_event_handlers: true,
  process_performance_data: false,
  obsess_over_services: false,
  obsess_over_hosts: false,
  translate_passive_host_checks: false,
  passive_host_checks_are_soft: false,
  check_for_orphaned_services: true,
  check_for_orphaned_hosts: true,
  check_service_freshness: true,
  service_freshness_check_interval: 60,
  service_check_timeout_state: 'c',
  check_host_freshness: false,
  host_freshness_check_interval: 60,
  additional_freshness_latency: 15,
  enable_flap_detection: true,
  low_service_flap_threshold: 5.0,
  high_service_flap_threshold: 20.0,
  low_host_flap_threshold: 5.0,
  high_host_flap_threshold: 20.0,
  date_format: 'us',
  illegal_object_name_chars: '\`~!$%^&*|\'\'<>?,():',
  illegal_macro_output_chars: '\`~$&|\'\'<>:',
  use_regexp_matching: false,
  use_true_regexp_matching: false,
  admin_email: 'nagios@localhost',
  admin_pager: 'pagenagios@localhost',
  daemon_dumps_core: false,
  use_large_installation_tweaks: false,
  enable_environment_macros: false,
  debug_level: 0,
  debug_verbosity: 1,
  debug_file: '/usr/local/nagios/var/nagios.debug',
  max_debug_file_size: 1000000,
  allow_empty_hostgroup_assignment: false
};
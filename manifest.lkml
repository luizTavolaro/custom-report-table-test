project_name: "viz-report_table-marketplace"

constant: VIS_LABEL {
  value: "Table (Report) test"
  export: override_optional
}

constant: VIS_ID {
  value: "report_table-marketplace-custom-test"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  label: "@{VIS_LABEL}"
  file: "src/bundle.js"
}

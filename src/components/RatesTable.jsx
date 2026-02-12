import React from "react";
import { colors } from "../theme/colors";

export default function RatesTable({ rates }) {
  if (!rates || !rates.columns?.length || !rates.rows?.length) return null;

  const { columns, rows, currency = "USD" } = rates;

  return (
    <div
      className="mt-6 rounded-2xl overflow-hidden border"
      style={{
        borderColor: "rgba(255,255,255,0.18)",
        backgroundColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="px-5 py-4 flex items-center justify-between gap-3 border-b"
        style={{ borderColor: "rgba(255,255,255,0.14)" }}
      >
        <h3 className="text-lg font-bold" style={{ color: colors.premiumGold }}>
          Rates
        </h3>
        <span className="text-xs text-white/70">Currency: {currency}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={{ backgroundColor: "rgba(0,0,0,0.18)" }}>
              {columns.map((c) => (
                <th key={c} className="px-5 py-3 font-bold text-white/90 whitespace-nowrap">
                  {c}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.pax} className="border-t" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                <td className="px-5 py-3 text-white/90 font-semibold whitespace-nowrap">
                  {String(r.pax).padStart(2, "0")}
                </td>

                {"fullDay" in r ? (
                  <td className="px-5 py-3 text-white/85 whitespace-nowrap">
                    {r.fullDay} {currency}
                  </td>
                ) : null}

                {"halfDay" in r ? (
                  <td className="px-5 py-3 text-white/85 whitespace-nowrap">
                    {r.halfDay} {currency}
                  </td>
                ) : null}

                {/* For tours that have only one column like Twilight/Trek/Wildlife/Heritage */}
                {"rate" in r ? (
                  <td className="px-5 py-3 text-white/85 whitespace-nowrap">
                    {r.rate} {currency}
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-4 text-xs text-white/70">
        * Per-person rates. Exact total may change based on pickup distance and add-ons.
      </div>
    </div>
  );
}

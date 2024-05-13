using System;
using System.Collections.Generic;
using UnityEngine;

public class laadData : MonoBehaviour
{
    public List<Maatregel> maatregelen = new List<Maatregel>();
    public Budget budget;
    void Start()
    {        
        TextAsset data = Resources.Load<TextAsset>("testLogica");
        string[] text = data.text.Split(new char[] { '\n' });

        for (int i = 0; i < text.Length; i++)
        {
            if (string.IsNullOrWhiteSpace(text[i]))
            {
                continue;
            }
            string[] line = text[i].Split(new char[] { ';' });
            if (line[1] != "naam" && line[1] != "budget")
            {
                try
                {
                    Maatregel maatregel = new Maatregel
                    {
                        naam = line[1],
                        minimaal = int.Parse(line[2]),
                        maximaal = int.Parse(line[3]),
                        effectPerWeek = int.Parse(line[4]),
                        kostenPerWeek = int.Parse(line[5]),
                        geholpenUurPerWeek = int.Parse(line[6]),
                        hulpDuurInWeken = int.Parse(line[7]),
                        rondesPerJaar = int.Parse(line[8]),
                        kostenPerPersoonPer3Maanden = int.Parse(line[9])
                    };
                    maatregelen.Add(maatregel);
                }
                catch (FormatException)
                {
                    Debug.LogError("Failed to parse line " + (i + 1));
                }
            }
            else if (line[1] == "budget")
            {
                try
                {
                    budget = new Budget();
                    budget.budget = int.Parse(line[3]);
                }
                catch (FormatException)
                {
                    Debug.LogError("Failed to parse budget on line " + (i + 1));
                }
            }
        }
    }
}

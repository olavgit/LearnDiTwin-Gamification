using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class laadData : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Loading data...");
        
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
                    Maatregel maatregel = new Maatregel();
                    maatregel.naam = line[1];
                    maatregel.minimaal = int.Parse(line[2]);
                    maatregel.maximaal = int.Parse(line[3]);
                    maatregel.effectPerWeek = int.Parse(line[4]);
                    maatregel.kostenPerWeek = int.Parse(line[5]);
                    maatregel.geholpenUurPerWeek = int.Parse(line[6]);
                    maatregel.hulpDuurInWeken = int.Parse(line[7]);
                    maatregel.rondesPerJaar = int.Parse(line[8]);
                    maatregel.kostenPerPersoonPer3Maanden = int.Parse(line[9]);
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
                    Budget budget = new Budget();
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
